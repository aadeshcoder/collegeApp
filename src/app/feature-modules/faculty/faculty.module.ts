import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './components/faculty/faculty.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FacultyComponent }
]

@NgModule({
  declarations: [
    FacultyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacultyModule { }
