import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

const ELEMENT_DATA: any = [
  {
    "department": "Information Technology",
    "expanded": true,
    "faculties": [
      {
        "id":1,
        "name": "John Doe",
        "designation": "Professor",
        "date_of_join": "01/01/2000",
        "experience": "20 years",
        "subject": "Mathematics",

      },
      {
        "id":2,
        "name": "Jane Smith",
        "designation": "Associate Professor",
        "date_of_join": "01/01/2005",
        "experience": "15 years",
        "subject": "Computer Science",

      }
    ]
  },
  {
    "department": "Computer Science",
    "expanded": true,
    "faculties": [
      {
        "id":3,
        "name": "Bob Johnson",
        "designation": "Assistant Professor",
        "date_of_join": "01/01/2013",
        "experience": "7 years",
        "subject": "Physics",
      },
      {
        "id":4,
        "name": "Alice Lee",
        "designation": "Lecturer",
        "date_of_join": "01/01/2018",
        "experience": "2 years",
        "subject": "Chemistry",
      }
    ]
  },
  {
    "department": "Fashion & Design",
    "expanded": true,
    "faculties": [
      {
        "id":5,
        "name": "Bob Johnson",
        "designation": "Assistant Professor",
        "date_of_join": "01/01/2013",
        "experience": "7 years",
        "subject": "Physics",
      },
      {
        "id":6,
        "name": "Alice Lee",
        "designation": "Lecturer",
        "date_of_join": "01/01/2018",
        "experience": "2 years",
        "subject": "Chemistry",
      }
    ]
  },
  {
    "department": "Mechanical Engineering",
    "expanded": true,
    "faculties": [
      {
        "id":7,
        "name": "Bob Johnson",
        "designation": "Assistant Professor",
        "date_of_join": "01/01/2013",
        "experience": "7 years",
        "subject": "Physics",
      },
      {
        "id":8,
        "name": "Alice Lee",
        "designation": "Lecturer",
        "date_of_join": "01/01/2018",
        "experience": "2 years",
        "subject": "Chemistry",
      }
    ]
  },

]

@Component({
  selector: 'app-faculty-table',
  templateUrl: './faculty-table.component.html',
  styleUrls: ['./faculty-table.component.scss'],
})


export class FacultyTableComponent {

  @Input() showByDepartment:boolean;
  @Input() data:any;
  columnsToDisplay = ['name', 'designation', 'date of join', 'experience', "subject"];

  constructor(private router:Router) {}

  // Toggling expanded value
  handleExpandCollpse(item:any) {
    item.expanded = !item.expanded;
  }

  openDeptDetails() {
    this.router.navigate(['/app-view/department'])
  }
}