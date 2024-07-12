import { Component } from '@angular/core';

@Component({
  selector: 'app-navbaraide',
  templateUrl: './navbaraide.component.html',
  styleUrl: './navbaraide.component.css'
})
export class NavbaraideComponent {
  listAides: any[];
  /**
   *
   */
  constructor() {
    this.listAides = [
      { label: 'Builder Character', routerLink: '/builder/home' },
      { label: 'Lanceur de dé', routerLink: 'dicesRoll' }
      
    ];
  }
}
