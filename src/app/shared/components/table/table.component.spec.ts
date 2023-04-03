import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call ngOnChanges', () => {
  //   spyOn(component, 'generateColumns').and.callThrough();
  //   const changes:SimpleChange = {
  //     leavesData: {
  //       currentValue: [{ "reason": "Some personal work" }], 
  //       firstChange: true,
  //       previousValue: undefined
  //     }
  //   }
  //   component.ngOnChanges(changes);
  // })

  // it("should generate columns", () => {
  //   const values = [{
  //     "end date": "2021-05-08",
  //     "reason": "some personal work",
  //     "start date": "2021-05-08",
  //     "type of leave": "privilege leave"
  //   }]
  //   component.generateColumns(values);
  //   expect(component.displayedColumns).toEqual(["end date", "reason", "start date", "type of leave"])
  // })

});
