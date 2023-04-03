import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentList, IUpdatedLocationList } from '../models/global.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private locationUrl = "http://localhost:5000/updatedLocationList";
  private allStudentUrl = "http://localhost:5000/allStudent";
  private studentApi = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getStudents(location: string): Observable<IStudentList[]> {
    return this.http.get<IStudentList[]>(`${this.studentApi}/${location}`);
  }

  getUpdatedLocations(): Observable<IUpdatedLocationList[]> {
    return this.http.get<IUpdatedLocationList[]>(this.locationUrl);
  }

  getAllStudents(): Observable<IStudentList[]> {
    return this.http.get<IStudentList[]>(this.allStudentUrl);
  }

  addStudent(student: IStudentList, location: string): Observable<IStudentList>{
    return this.http.post<IStudentList>(`${this.studentApi}/${location}`, student, httpOptions);
  }

  updateStudent(student:IStudentList, location:string):Observable<IStudentList> {
    const url = `${this.studentApi}/${location}/${student.id}`;
    return this.http.put<IStudentList>(url,student,httpOptions);
  } 
}
