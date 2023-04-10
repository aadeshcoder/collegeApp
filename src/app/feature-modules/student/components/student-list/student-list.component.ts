import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDummyStudent, IStudentList, ITakenLeaves } from 'src/app/core/models/global.model';
import { LocationSelectionService } from 'src/app/app-view/services/location-selection.service';
import { HttpService } from 'src/app/core/services/http.service';
import { MatDialog } from "@angular/material/dialog"
import { Subscription } from 'rxjs';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit, OnDestroy {

  selectedLocationId: number;
  studentList: IDummyStudent[];
  searchText: string = '';
  selectedStudent: IDummyStudent;
  locationSubscription: Subscription;
  displayedColumns: string[] = [];
  tableColumns: string[] = [];

  constructor(
    private dataService: LocationSelectionService,
    public httpService: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.locationSubscription = this.dataService.getSelectedLocation().subscribe((value) => {
      this.selectedLocationId = value;
      if(this.selectedLocationId === -1) {
        // loading all location students
        this.httpService.getAllStudents().subscribe((res) => {
          this.studentList = res;
        });
      } else {
        // loading individual location students
        this.httpService.getStudentsByLocation(this.selectedLocationId).subscribe((res) => {
          this.studentList = res;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }

  /*
  ** Storing the select item from the list
  */
  handleStudentSelect(item: IDummyStudent) {
    if (item) {
      this.selectedStudent = item;
      this.generateColumns(this.selectedStudent.leaves_taken);
    }
  }

  /*
  ** Generating column names from the data
  */
  generateColumns(values: ITakenLeaves[]) {
    if (values) {
      const obj = values?.[0]
      let columns: string[] = obj ? Object.keys(obj) : [];
      this.tableColumns = columns;
      for (let columnName of columns) {
        this.displayedColumns.push(columnName.split('_').join(' '))
      }
    }
  }

  /*
  ** Method for add student
  */
  addStudent(newStudentData: IDummyStudent) {
    this.httpService.addStudent(newStudentData, this.selectedLocationId).subscribe((result) => {
      this.studentList.push(result);
    })
  }

  /*
  ** Mehod to edit student
  */
  updateStudent(updatedStudentData: IDummyStudent) {
    this.httpService.updateStudent(updatedStudentData, this.selectedStudent.id).subscribe((result) => {
      this.studentList = this.studentList.map((student) => {
        if (student.id === result.id) {
          student = updatedStudentData;
          this.selectedStudent = updatedStudentData;
        }
        return student;
      });
    });
  }

  getEditStudentData(editStudent: IDummyStudent) {
    this.updateStudent(editStudent);
  }

  /*
  ** Open add student dialog
  */
  openAddStudentDialog() {

    const dialogRef = this.dialog.open(StudentFormDialogComponent, {

      disableClose: true,
      data: {
        location: this.selectedLocationId,
        title: "Add Student",
        operation: "add"
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result.studentData) {
        this.addStudent(result.studentData);
      }
    })
  }

}
