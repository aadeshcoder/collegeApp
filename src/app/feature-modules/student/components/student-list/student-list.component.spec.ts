import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentListComponent } from './student-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';
import { EditDetailsComponent } from '../edit-details/edit-details.component';
import { Observable, Observer, of } from 'rxjs';
import { AddStudentComponent } from '../add-student/add-student.component';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentListComponent, SearchFilterPipe],
      imports: [HttpClientModule, MatDialogModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getApi with specific location', () => {
  //   component.selectedLocation = "all";
  //   component.selectedLocation = "sindhudurga";
  //   component.ngOnInit();
  // })

  it('should store the selected item from the student list', () => {
    const item = {
      "sId": "120",
      "name": "Aniksha",
      "department": "Information Technology",
      "head_of_department": "Patil",
      "leaves": 12,
      "date_of_join": "2012-12-12",
      "date_of_birth": "2000-12-12",
      "grades": "B",
      "semister": "3",
      "leavesTaken": [],
      "id": 4
    }
    component.handleStudentSelect(item);
    expect(component.selectedStudent).toEqual(item);
  })

  it('should open edit dialog', () => {
    component.selectedLocation = 'all';
    component.openEditDialog();
    component.selectedLocation = 'sindhudurga';
    const result = {
      studentData: {
        "sId": "120",
        "name": "Aniksha",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 4
      }
    }

    component.studentList = [
      {
        "sId": "120",
        "name": "Aniksha",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 4
      },
      {
        "sId": "121",
        "name": "Ramesh",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 5
      }
    ]
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => {
        return of(result);
      },
    } as MatDialogRef<typeof EditDetailsComponent>);

    component.httpService.updateStudent = () => {
      return new Observable((observer: Observer<any>) => {
        observer.next(result.studentData);
        observer.complete();
      })
    }
    
    expect(component.selectedStudent).toEqual(result.studentData);
  })

  it('should open Add student dialog', () => {
    const result = {
      studentData: {
        "sId": "103",
        "name": "Aniksha",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 3
      }
    }
    component.studentList = [
      {
        "sId": "101",
        "name": "Ramesh",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 1
      },
      {
        "sId": "102",
        "name": "Suresh",
        "department": "Information Technology",
        "head_of_department": "Patil",
        "leaves": 12,
        "date_of_join": "2012-12-12",
        "date_of_birth": "2000-12-12",
        "grades": "B",
        "semister": "3",
        "leavesTaken": [],
        "id": 2
      }
    ];
    component.selectedLocation = "sindhudurga";
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => {
        return of(result);
      },
    } as MatDialogRef<typeof AddStudentComponent>);

    component.httpService.addStudent = () => {
      return new Observable((observer:Observer<any>) => {
        observer.next(result.studentData);
        observer.complete();
      })
    }
    component.openAddStudentDialog();
    expect(component.studentList.length).toEqual(3);
  })
});
