import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageRouters: Array<{link: string, title: string}> = [{
    link: 'main',
    title: 'Main'
  }, {
    link: 'search',
    title: 'Search'
  }, {
    link: 'definition-creation',
    title: 'Definition Creation'
  },
  {
    link: 'developer',
    title: 'Developers'
  }];
}
