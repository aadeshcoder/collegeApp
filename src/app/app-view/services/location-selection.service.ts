import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationSelectionService {
  public selectedLocation = new BehaviorSubject<number>(-1); //TODO: name

  setSelectedLocation(value: number) {//TODO: name
    this.selectedLocation.next(value);
  }

  getSelectedLocation(): Observable<number> { //TODO: name
    return this.selectedLocation.asObservable();
  }

}
