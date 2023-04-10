import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './components/faculty/faculty.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacultyTableComponent } from './components/faculty-table/faculty-table.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'facultyList', pathMatch: 'full' },
  { path: 'facultyList', component: FacultyComponent },
]

@NgModule({
  declarations: [
    FacultyComponent,
    FacultyTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class FacultyModule { }
