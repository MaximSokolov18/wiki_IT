import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {DefinitionCreationPageComponent} from './pages/definition-creation-page/definition-creation-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'definition-creation', component: DefinitionCreationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
