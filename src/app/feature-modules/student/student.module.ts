import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentFormDialogComponent } from './components/student-form-dialog/student-form-dialog.component';

// Routing for student module
const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }
]

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentModule {

  constructor() {
    console.log("Student Module Loading...")
  }
  
}
