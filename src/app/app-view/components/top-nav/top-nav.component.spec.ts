// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TopNavComponent } from './top-nav.component';
// import { HttpService } from 'src/app/core/services/http.service';
// import { HttpClientModule } from '@angular/common/http';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { Observable, Observer } from 'rxjs';

// describe('TopNavComponent', () => {
//   let component: TopNavComponent;
//   let fixture: ComponentFixture<TopNavComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [TopNavComponent],
//       providers: [HttpService],
//       imports: [HttpClientModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TopNavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     fixture.destroy();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should pass the location', () => {
//     spyOn(component.dataService, 'sendData').and.callThrough();
//     const selectedLocation = "all";
//     component.passLocation();
//     expect(component.dataService.sendData).toHaveBeenCalledWith(selectedLocation);
//   })

//   it('should get list of locations', () => {
//     component.httpService.getUpdatedLocations = () => {
//       const locations = [{ id: 1, "name": "sindhudurga" }, { id: 2, "name": "akola" },]
//       return new Observable((observer: Observer<any>) => {
//         observer.next(locations);
//         observer.complete();
//       })
//     }
//     component.ngOnInit();
//     expect(component.locations).toEqual(['sindhudurga','akola'])
//   })

// });
