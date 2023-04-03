import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IStudentList } from 'src/app/core/models/global.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, OnChanges{
  @Input() student:IStudentList;
  @Input() leavesTableHeadings:string[];
  @Input() leavesTableColumns:string[];
  @Output() studentDataEmitter = new EventEmitter<IStudentList>();

  constructor(public dialog:MatDialog) {}
  
  ngOnInit(): void {
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(StudentFormDialogComponent,{
      disableClose:true,
      data: {
        title: "Edit Student",
        selectedStudentData:this.student,
        operation:"edit"
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      // id: this.data.selectedStudentData.id
      result.studentData.id = this.student.id;
      console.log(result.studentData);
      this.studentDataEmitter.emit(result.studentData);
    });
  }

  ngOnChanges(value:SimpleChanges) {
    console.log(value);
  }
  
}
