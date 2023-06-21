import { Component, ChangeDetectorRef } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";

import {Article} from "../../components/article/article.component";

type Node = {
  name: string;
  children?: Node[];
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  articles: Array<Article> = [];
  mainContent?: Article;
  isLoaded: boolean = false;
  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.setArticles();
  }

  setArticles() {
    this.isLoaded = true;
    this.http.get('https://cute-underwear-frog.cyclic.app/articles').subscribe((response) => {
      this.dataSource.data = Object.entries((response as Array<Article>).reduce((acc, item) => {
        return {
          ...acc,
          [item.name_topic]: acc?.[item.name_topic] ? [...acc?.[item.name_topic], item] : [item]
        }
      }, {} as any)).map(([name, children]) => ({name, children: (children as Array<any>).map((item) => ({name: item.a_name}))}));

      this.isLoaded = false;
      this.articles = (response as Array<Article>);
    });
  }

  setMainContent(articleName: string) {
    this.mainContent = this.articles.find(({a_name}) => a_name === articleName);
  }

  deleteArticle(node: any){
    this.http.post('https://cute-underwear-frog.cyclic.app/deleteArticle', {a_name: node.name}).subscribe((response) => {
      this.setArticles()
    });
  }
}
