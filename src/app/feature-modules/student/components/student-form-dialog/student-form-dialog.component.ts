import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departmentHodMap, semisters, grades } from "../../models/formOptions.model"

@Component({
  selector: 'app-student-form-dialog',
  templateUrl: './student-form-dialog.component.html',
  styleUrls: ['./student-form-dialog.component.scss']
})
export class StudentFormDialogComponent implements OnInit {

  deptWithHodList: any;
  deptList: string[];
  semistersList: string[];
  gradeList: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public dialogRef:MatDialogRef<StudentFormDialogComponent>
  ) { }

  // form for add student
  addStudentForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-z A-Z]*$/)]],
    date_of_birth: ['', [Validators.required]],
    department: ['', [Validators.required]],
    head_of_department: ['', [Validators.required]],
    semister: ['', [Validators.required]],
    grade: ['', [Validators.required]],
    date_of_join: ['', [Validators.required]],
  }, { validator: dateValidator })

  ngOnInit(): void {
    this.deptWithHodList = departmentHodMap;
    this.semistersList = semisters;
    this.gradeList = grades;
    this.deptList = Object.keys(this.deptWithHodList);
    if(this.data.operation === 'edit') {
      this.loadData()
    }
    console.log(this.data);
  }

  // method to set the values in the fields
  loadData() {
    this.addStudentForm.patchValue({
      name: this.data.selectedStudentData.name,
      semister: this.data.selectedStudentData.semister,
      department: this.data.selectedStudentData.department,
      grade: this.data.selectedStudentData.grades,
      head_of_department: this.data.selectedStudentData.head_of_department,
      date_of_join: new Date(this.data.selectedStudentData.date_of_join),
      date_of_birth: new Date(this.data.selectedStudentData.date_of_birth),
    })
  }

  setHeadOfDept(deptName: string): void {
    const hodName = this.deptWithHodList[deptName];
    this.addStudentForm.patchValue({
      head_of_department: hodName
    })
  }

  onSubmit() {
    // const dateOfJoin = new Date(this.addStudentForm.value.date_of_join!)
    // const dateOfBirth = new Date(this.addStudentForm.value.date_of_birth!);

    const newStudent = {
      name: this.addStudentForm.value.name!,
      department: this.addStudentForm.value.department!,
      head_of_department: this.addStudentForm.value.head_of_department!,
      leaves: 12,
      // date_of_join: dateOfJoin.toLocaleDateString(),
      // date_of_birth: dateOfBirth.toLocaleDateString(),
      date_of_join: this.addStudentForm.value.date_of_join,
      date_of_birth: this.addStudentForm.value.date_of_birth,
      grades: this.addStudentForm.value.grade!,
      semister: this.addStudentForm.value.semister!,
      leavesTaken: [],
    }

    this.dialogRef.close({
      studentData:newStudent
    })
  }

  onCancel() {
    this.dialogRef.close({});
  }

}

function dateValidator(group: FormGroup): { [key: string]: any } | null {
  const birthDate = group.get('date_of_birth')?.value;
  const joinDate = group.get('date_of_join')?.value;

  if (!birthDate || !joinDate) {
    // Don't validate if either date is missing
    return null;
  }

  if (birthDate > joinDate) {
    return { invalidDate: true };
  }

  return null;
}
