import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-univers',
  templateUrl: './navbar-univers.component.html',
  styleUrl: './navbar-univers.component.css',
})
export class NavbarUniversComponent {
  listUnivers: any[];
  /**
   *
   */
  constructor() {
    this.listUnivers = [
      { label: 'Plans', routerLink: '/univers/plans' },
      { label: 'Panthéon', routerLink: '/univers/pantheon' },
      { label: 'Histoire', routerLink: '/univers/histoire' },
      { label: 'Royaumes Oubliés', routerLink: '/univers/royaumesOubliés' },
      {
        label: 'Provinces de Laelith',
        routerLink: '/univers/provincesDeLaelith',
      },
      { label: 'Laelith', routerLink: '/univers/laelith' },
      { label: 'Organisations', routerLink: '/univers/plans' },
      { label: 'CultureDrakeide', routerLink: 'CultureDrakeide' },
      { label: 'CultureDrow', routerLink: 'CultureDrow' },
      { label: 'CultureElfique', routerLink: 'CultureElfique' },
      { label: 'CultureGnome', routerLink: 'CultureGnome' },
      { label: 'CultureHalfeline', routerLink: 'CultureHalfeline' },
      { label: 'CultureNaine', routerLink: 'CultureNaine' },
      { label: 'Dragons', routerLink: 'Dragons' },
      { label: 'Gnolls', routerLink: 'Gnolls' },
      { label: 'Gobelins', routerLink: 'Gobelins' },
      { label: 'Hobgobelins', routerLink: 'Hobgobelins' },
      { label: 'Kenku', routerLink: 'Kenku' },
      { label: 'Kobolds', routerLink: 'Kobolds' },
      { label: 'Orcs', routerLink: 'Orcs' },
      { label: 'Tabaxis', routerLink: 'Tabaxis' },
    ];
  }
}
