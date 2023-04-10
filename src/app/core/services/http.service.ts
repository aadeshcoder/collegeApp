import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { IDummyLocation, IDummyStudent, IStudentList, IUpdatedLocationList } from '../models/global.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private locationUrl = "http://localhost:5000/updatedLocationList";
  // private allStudentUrl = "http://localhost:5000/allStudent";
  // private studentApi = "http://localhost:5000";

  // TODO: new urls
  private locationURL = "http://localhost:5000/dummyLocations";
  private studentByLocationURL = "http://localhost:5000/dummyStudents?dummyLocationId="
  private studentsURL = "http://localhost:5000/dummyStudents";

  constructor(private http: HttpClient) { }

  // getStudents(location: string): Observable<IStudentList[]> {
  //   return this.http.get<IStudentList[]>(`${this.studentApi}/${location}`);
  // }

  // getUpdatedLocations(): Observable<IUpdatedLocationList[]> {
  //   return this.http.get<IUpdatedLocationList[]>(this.locationUrl);
  // }

  // getAllStudents(): Observable<IStudentList[]> {
  //   return this.http.get<IStudentList[]>(this.allStudentUrl);
  // }

  // addStudent(student: IStudentList, location: string): Observable<IStudentList>{
  //   return this.http.post<IStudentList>(`${this.studentApi}/${location}`, student, httpOptions);
  // }

  // updateStudent(student:IStudentList, location:string):Observable<IStudentList> {
  //   const url = `${this.studentApi}/${location}/${student.id}`;
  //   return this.http.put<IStudentList>(url,student,httpOptions);
  // } 


  // TODO: Updated Method here...

  getLocation():Observable<IDummyLocation[]> {
    return this.http.get<IDummyLocation[]>(this.locationURL);
  }

  getStudentsByLocation(locationId:number):Observable<IDummyStudent[]> {
    return this.http.get<IDummyStudent[]>(`${this.studentByLocationURL}${locationId}`)
  } 

  getAllStudents():Observable<IDummyStudent[]> {
    return this.http.get<IDummyStudent[]>(this.studentsURL);
  }

  addStudent(newStudent:IDummyStudent, locationId:number):Observable<IDummyStudent> {
    return this.http.post<IDummyStudent>(`${this.studentsURL}?dummyLocationId=${locationId}`, newStudent, httpOptions);
  }

  updateStudent(editedStudent: IDummyStudent, studentId:number):Observable<IDummyStudent> {
    // http://localhost:5000/dummyStudents/5
    return this.http.put<IDummyStudent>(`${this.studentsURL}/${studentId}`, editedStudent, httpOptions);
  }
} 
