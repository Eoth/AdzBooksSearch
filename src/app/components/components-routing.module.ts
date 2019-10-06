import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'search', component: SearchComponent},
  { path: 'results', component: SearchResultsComponent},
  { path: 'viewsDetails', component: DetailViewComponent},
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line: class-name
export class componentsRoutingModule { }
