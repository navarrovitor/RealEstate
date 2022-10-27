import { Component } from '@angular/core';

@Component({
  selector: 're-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  lat = -23.7666;
  lng = -45.746133;
  zoom = 15;
}
