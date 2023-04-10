import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { LocationSelectionService } from '../../services/location-selection.service';
import { IDummyLocation } from 'src/app/core/models/global.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  locationList: IDummyLocation[];
  selectedLocationId: number = -1;

  constructor(public httpService: HttpService, public dataService: LocationSelectionService) { }

  ngOnInit(): void {
    // this.httpService.getUpdatedLocations().subscribe((list) => {
    //   this.locationList = list.map((locationObj, ind) => locationObj.name);
    // });

    this.httpService.getLocation().subscribe((location) => {
      this.locationList = location;
    })
  }

  /*
  ** Passes selected location
  */
  setLocation(locationId:number) {
    this.dataService.setSelectedLocation(locationId);
  }


}
