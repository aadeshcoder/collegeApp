import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { LocationSelectionService } from '../../services/location-selection.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  locationList: string[];
  selectedLocation: string = 'all'

  constructor(public httpService: HttpService, public dataService: LocationSelectionService) { }

  ngOnInit(): void {
    this.httpService.getUpdatedLocations().subscribe((list) => {
      this.locationList = list.map((locationObj, ind) => locationObj.name);
    });
  }

  /*
  ** Passes selected location
  */
  setLocation() {
    this.dataService.setSelectedLocation(this.selectedLocation);
  }

}
