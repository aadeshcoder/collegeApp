import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppViewComponent } from './app-view/app-view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "app-view",
    pathMatch: 'full'
  },
  {
    path: "app-view",
    component: AppViewComponent,
    children: [
      {
        path: "student",
        loadChildren: () => import('./feature-modules/student/student.module').then(m => m.StudentModule)
      },
      {
        path: "department",
        loadChildren: () => import('./feature-modules/department/department.module').then(m => m.DepartmentModule)
      },
      {
        path: "faculty",
        loadChildren: () => import('./feature-modules/faculty/faculty.module').then(m => m.FacultyModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
