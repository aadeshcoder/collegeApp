import { Component, OnInit } from '@angular/core';
import { locationList } from "../../model/mockLocationData"

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit{
  // variables
  locations: string[];
  
  // lifecycle methods
  ngOnInit(): void {
    this.locations = locationList;
  }
}
