import { Component } from '@angular/core';
import { AppRoutes } from 'src/app/core/models/global.model';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  routes = AppRoutes;
}
