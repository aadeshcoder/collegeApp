import { Component, OnInit, OnDestroy } from '@angular/core';
import { IStudentList, ITakenLeaves } from 'src/app/core/models/global.model';
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

  SELECT_LOCATION_ALL: string = "all";
  STUDENT_ADD_ID: number = 300;
  selectedLocation: string;
  studentList: IStudentList[];
  searchText: string = '';
  selectedStudent: IStudentList;
  locationSubscription: Subscription;
  displayedColumns: string[] = [];
  tableColumns:string[] = [];

  constructor(
    private dataService: LocationSelectionService,
    public httpService: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.locationSubscription = this.dataService.getSelectedLocation().subscribe((value) => {
      this.selectedLocation = value;
      // if "all" option selected
      if (this.selectedLocation.toLocaleLowerCase() === this.SELECT_LOCATION_ALL) {
        this.httpService.getAllStudents().subscribe((res) => {
          this.studentList = res;
        });
        return;
      }
      else {
        // loading individual location
        this.httpService.getStudents(this.selectedLocation).subscribe((res) => {
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
  handleStudentSelect(item: IStudentList) {
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
      for(let columnName of columns) {
        this.displayedColumns.push(columnName.split('_').join(' '))
      }
    }
  }

  /*
  ** Method for add student
  */
  addStudent(newStudentData: IStudentList) {
    this.httpService.addStudent(newStudentData, this.selectedLocation).subscribe((result) => {
      this.studentList.push(result);
    })
  }

  /*
  ** Mehod to edit student
  */
  updateStudent(updatedStudentData: IStudentList) {
    this.httpService.updateStudent(updatedStudentData, this.selectedLocation).subscribe((result) => {
      this.studentList = this.studentList.map((student) => {
        if (student.id === result.id) {
          student = updatedStudentData;
          this.selectedStudent = updatedStudentData;
        }
        return student;
      });
    });
  }

  getEditStudentData(editStudent: IStudentList) {
    console.log(editStudent);
    this.updateStudent(editStudent);
  }

  /*
  ** Open Edit dialog 
  */
  openEditDialog() {
    // Don't open the dialog when location is 'all'
    if (this.selectedLocation === this.SELECT_LOCATION_ALL) {
      alert("Please choose specific location first.");
      return;
    }

    const dialogRef = this.dialog.open(StudentFormDialogComponent, {
      disableClose: true,
      // data: this.selectedStudent
      data: {
        title: "Edit Student",
        // selectedStudentData:this.selectedStudent,
        // operation:"edit"
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result.studentData) {
        console.log(result.studentData);
        // this.updateStudent(result.studentData);
      }
    });
  }

  /*
  ** Open add student dialog
  */
  openAddStudentDialog() {
    // Don't open the dialog when location is 'all'
    // if (this.selectedLocation === this.SELECT_LOCATION_ALL) {
    //   alert("Please choose specific location first.");
    //   return;
    // }

    const dialogRef = this.dialog.open(StudentFormDialogComponent, {

      disableClose: true,
      data: {
        location: this.selectedLocation,
        title: "Add Student",
        operation: "add"
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result.studentData) {
        console.log(result.studentData);
        this.addStudent(result.studentData);
      }
    })
  }

}
