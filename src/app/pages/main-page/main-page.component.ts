import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";

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
  articles: any = [];
  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.http.get('http://localhost:3000/articles').subscribe((response) => {
      this.articles = Object.entries((response as Array<any>).reduce((acc, item) => {
        return {
          ...acc,
          [item.name_topic]: acc?.[item.name_topic] ? [...acc?.[item.name_topic], item] : [item]
        }
      }, {})).map(([name, children]) => ({name, children: (children as Array<any>).map((item) => ({name: item.a_name}))}));

      this.dataSource.data = this.articles;
    });
  }
}
