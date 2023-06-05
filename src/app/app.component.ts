import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageRouters: Array<{link: string, title: string}> = [{
    link: 'main',
    title: 'Головна'
  }, {
    link: 'search',
    title: 'Пошук'
  }, {
    link: 'definition-creation',
    title: 'Створення статей'
  }];
}
