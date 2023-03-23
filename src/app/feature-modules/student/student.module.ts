import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { Routes,RouterModule } from '@angular/router';

// Routing for student module
const routes:Routes = [
  {
    path:'',
    component:StudentListComponent
  }
]

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { 

  constructor() {
    console.log("Student Module")
  }
}
