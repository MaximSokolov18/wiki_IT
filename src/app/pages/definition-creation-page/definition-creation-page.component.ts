import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

type ArticleData = {
  a_name: string,
  topic: string,
  keywords: Array<string>,
  content: string,
  link: string,
}

@Component({
  selector: 'app-definition-creation-page',
  templateUrl: './definition-creation-page.component.html',
  styleUrls: ['./definition-creation-page.component.scss']
})
export class DefinitionCreationPageComponent {
  articleFields: ArticleData = {
    a_name: '',
    topic: '',
    keywords: [''],
    content: '',
    link: ''
  }

  constructor(private http: HttpClient) { }

  createArticle() {
    return this.http.post('http://localhost:3000/articles', this.articleFields).subscribe(response => {
      console.log(response);
    });
  }

  changeField(nameField: keyof ArticleData, event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    if (nameField === 'keywords') {
      this.articleFields[nameField] = value.trim().split(/,+\s+|,/g);
    } else {
      this.articleFields[nameField] = value;
    }
  }
}
