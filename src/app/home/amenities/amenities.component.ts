import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 're-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
})
export class AmenitiesComponent {
  amenities = [
    {
      info: 'Piscina',
      icon: 'fa-solid fa-person-swimming',
    },
    {
      info: 'Wi-Fi',
      icon: 'fa-solid fa-wifi',
    },
    {
      info: 'Pé na areia',
      icon: 'fa-solid fa-umbrella-beach',
    },
    {
      info: '3 vagas',
      icon: 'fa-solid fa-car-side',
    },
    {
      info: '6 suítes',
      icon: 'fa-solid fa-door-open',
    },
    {
      info: 'Fire pit',
      icon: 'fa-solid fa-fire',
    },
  ];

  rooms = [
    'Quarto acessível com cama King',
    'Cama King e vista para o mar',
    'Cama King e vista para o mar',
    'Duas camas de solteiro',
    'Duas camas de solteiro',
    'Cama King e acesso ao terraço',
  ];

}
