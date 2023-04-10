import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDummyDept, IDummyFaculty, IDummyLocationFaculty } from 'src/app/core/models/global.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyHttpService {

  constructor(public http:HttpClient) { }

  private facultyURL = "http://localhost:5000";

  //request for getting location specific faculties
  getLocationFaculties(locationId:number):Observable<IDummyLocationFaculty> {
    return this.http.get<IDummyLocationFaculty>(`${this.facultyURL}/dummyLocations/${locationId}/?_embed=dummyFaculties`);
  }

  // requst for getting departments
  getDepartments() :Observable<IDummyDept[]>{
    return this.http.get<IDummyDept[]>(`${this.facultyURL}/dummyDepts`);
  }

  getAllFaculties():Observable<IDummyFaculty[]> {
    return this.http.get<IDummyFaculty[]>(`${this.facultyURL}/dummyFaculties`);
  }
}
