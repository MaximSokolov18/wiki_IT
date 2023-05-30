import { Component, Input } from '@angular/core';

export type Article = {
  id: number,
  a_name: string,
  id_topic: number,
  link: string,
  name_topic: string,
  content: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() articleData!: Article;
}
