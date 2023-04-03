import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationSelectionService {
  public selectedLocation = new BehaviorSubject<string>('all'); //TODO: name

  setSelectedLocation(value: string) {//TODO: name
    this.selectedLocation.next(value);
  }

  getSelectedLocation(): Observable<string> { //TODO: name
    return this.selectedLocation.asObservable();
  }

}
