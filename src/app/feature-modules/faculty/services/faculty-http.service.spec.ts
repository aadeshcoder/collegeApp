import { TestBed } from '@angular/core/testing';
import { FacultyHttpService } from './faculty-http.service';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FacultyHttpService', () => {
  let service: FacultyHttpService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(FacultyHttpService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return location specific faculties', () => {
    const url = "http://localhost:5000"
    const locationId = 1;
    const locationWithFaculties = {
      "id": 1,
      "name": "Sindhudurga",
      "dummyFaculties": [
        {
          "id": 1,
          "name": "John Doe",
          "designation": "Professor",
          "date_of_join": "01/01/2000",
          "experience": "20 years",
          "subject": "C++",
          "dummyDeptId": 1,
          "dummyLocationId": 1
        }
      ]
    }

    service.getLocationFaculties(locationId).subscribe((result) => {
      expect(result).toEqual(locationWithFaculties);
    })

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/dummyLocations/${locationId}/?_embed=dummyFaculties`,
    })

    req.flush(locationWithFaculties)
  })

  it('should get department data', () => {
    const url = "http://localhost:5000"
    const deptData = [
      {
        "id": 1,
        "name": "Information Technology",
        "expanded": true
      },
      {
        "id": 2,
        "name": "Computer Science",
        "expanded": true
      }
    ]

    service.getDepartments().subscribe((result) => {
      expect(result).toEqual(deptData);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/dummyDepts`,
    });

    req.flush(deptData);
  })

  it('should get all faculties data', () => {
    const url = "http://localhost:5000"
    const facultyData = [
      {
        "id": 1,
        "name": "John Doe",
        "designation": "Professor",
        "date_of_join": "01/01/2000",
        "experience": "20 years",
        "subject": "C++",
        "dummyDeptId": 1,
        "dummyLocationId": 1
      },
      {
        "id": 3,
        "name": "Bob Johnson",
        "designation": "Assistant Professor",
        "date_of_join": "01/01/2013",
        "experience": "7 years",
        "subject": "Micro-Architecture",
        "dummyDeptId": 1,
        "dummyLocationId": 1
      }
    ]

    service.getAllFaculties().subscribe((result) => {
      expect(result).toEqual(facultyData);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/dummyFaculties`,
    });

    req.flush(facultyData);
  })
});
