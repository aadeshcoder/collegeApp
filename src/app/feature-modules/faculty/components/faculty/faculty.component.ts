import { Component, OnInit } from '@angular/core';
import { IDummyDept, IDummyFaculty, IDummyLocationFaculty, IFaculty } from 'src/app/core/models/global.model';
import { FacultyHttpService } from '../../services/faculty-http.service';
import { LocationSelectionService } from 'src/app/app-view/services/location-selection.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  selectedLocationId: number;
  isChecked: boolean = false;
  deptWithFaculty: any = [];
  deptData: IDummyDept[];
  locationFacultiesData: IDummyFaculty[];

  constructor(
    public facultyService: FacultyHttpService,
    public locationService: LocationSelectionService
  ) { }

  async ngOnInit(): Promise<void> {
    this.locationService.getSelectedLocation().subscribe(async (location) => {
      this.selectedLocationId = location;

      if (this.selectedLocationId === -1) { // loading all faculties
        await this.getAllLocationAndFaculty().then((response) => {
          this.locationFacultiesData = response;
        }).catch((error) => console.error(error));
      } else {
        await this.getLocationAndFaculty().then((response) => { // loading location wise faculties
          this.locationFacultiesData = response.dummyFaculties;
        }).catch((error) => console.error(error));
      }

      // function to get department data
      await this.getDeptData().then((response) => this.deptData = response).catch((error) => console.error(error));

      // make the required strcture for rendering the faculty table
      this.buildStructure()
    });
  }

  // function to get location wise faculty data
  async getLocationAndFaculty(): Promise<IDummyLocationFaculty> {
    return new Promise((resolve, reject) => {
      this.facultyService.getLocationFaculties(this.selectedLocationId).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  // function to get location wise faculty data
  async getAllLocationAndFaculty(): Promise<IDummyFaculty[]> {
    return new Promise((resolve, reject) => {
      this.facultyService.getAllFaculties().subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  // function to get dept data
  async getDeptData(): Promise<IDummyDept[]> {
    return new Promise((resolve, reject) => {
      this.facultyService.getDepartments().subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    })
  }

  // function to structrize the data of dept and faculties by location
  buildStructure() {

    this.deptWithFaculty = [];

    // loop for creating dept strcture with empty faculties
    for (let dept of this.deptData) {
      let entry: any = {};
      entry['id'] = dept.id;
      entry['department'] = dept.name;
      entry['expanded'] = dept.expanded;
      entry['faculties'] = []
      this.deptWithFaculty.push(entry);
    }

    // loop to store faculties department wise
    for (let dept of this.deptWithFaculty) {
      for (let faculty of this.locationFacultiesData) {
        if (faculty.dummyDeptId === dept.id) {
          dept.faculties.push(faculty);
        }
      }
    }
  }

}
