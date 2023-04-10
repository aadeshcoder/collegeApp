import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDummyStudent } from 'src/app/core/models/global.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student:IDummyStudent;
  @Input() leavesTableHeadings:string[];
  @Input() leavesTableColumns:string[];
  @Output() studentDataEmitter = new EventEmitter<IDummyStudent>();

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
      result.studentData.id = this.student.id;
      this.studentDataEmitter.emit(result.studentData);
    });
  }  
}
