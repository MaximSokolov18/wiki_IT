import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {Article} from "../main-page/main-page.component";

type Keyword = {
  id: number,
  name: string,
  weight: number
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  // @ts-ignore
  filteredOptions: Observable<string[]>;
  articles: Array<Article> = [];
  allKeywords: Array<Keyword> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllKeywords();
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getAllKeywords() {
    this.http.get('http://localhost:3000/allKeyword').subscribe((response) => {
      this.options = (response as Array<Keyword>).map(({name}) => name);
      this.allKeywords = (response as Array<Keyword>)
    })
  }

  searchArticles() {
    this.http
        .get(`
          http://localhost:3000/articles/keywords/${this.allKeywords.filter(({name}) => name === this.myControl.value)[0].id}
        `)
        .subscribe((response) => {
          this.articles = response as Array<Article>;
        })
  }
}
