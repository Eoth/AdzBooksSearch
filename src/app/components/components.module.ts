import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { componentsRoutingModule } from './components-routing.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    DetailViewComponent
  ],
  imports: [
    componentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
