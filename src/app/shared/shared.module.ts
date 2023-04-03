import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AcronymPipe } from './pipes/acronym.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AcronymPipe,
    SearchFilterPipe,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AcronymPipe,
    SearchFilterPipe,
    TableComponent
  ]
})
export class SharedModule { }
