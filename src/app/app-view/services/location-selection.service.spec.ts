import { TestBed } from '@angular/core/testing';

import { LocationSelectionService } from './location-selection.service';

describe('LocationSelectionService', () => {
  let service: LocationSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call sendData method", () => {
    spyOn(service.selectedLocation, "next").and.callThrough();
    const value = 1;
    service.setSelectedLocation(value);
    expect(service.selectedLocation.next).toHaveBeenCalledWith(value);
  })

  it("should call receiveData method", () => {
    spyOn(service.selectedLocation, "asObservable").and.callThrough();
    service.getSelectedLocation();
    expect(service.selectedLocation.asObservable).toHaveBeenCalled();
  })
});
