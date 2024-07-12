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
      { label: 'Royaumes Oubliés', routerLink: 'royaumesOublies' },
      {
        label: 'Provinces de Laelith',
        routerLink: 'provincesDeLaelith',
      },
      { label: 'Laelith', routerLink: 'laelith' },
      { label: 'Organisations', routerLink: 'organisations' },
      { label: 'Culture Drakeide', routerLink: 'cultureDrakeide' },
      { label: 'Culture Drow', routerLink: 'cultureDrow' },
      { label: 'Culture Elfique', routerLink: 'cultureElfique' },
      { label: 'Culture Gnome', routerLink: 'cultureGnome' },
      { label: 'Culture Halfeline', routerLink: 'cultureHalfeline' },
      { label: 'Culture Naine', routerLink: 'cultureNaine' },
      { label: 'Dragons', routerLink: 'dragons' },
      { label: 'Gnolls', routerLink: 'gnolls' },
      { label: 'Gobelins', routerLink: 'gobelins' },
      { label: 'Hobgobelins', routerLink: 'hobgobelins' },
      { label: 'Kenku', routerLink: 'kenku' },
      { label: 'Kobolds', routerLink: 'kobolds' },
      { label: 'Orcs', routerLink: 'orcs' },
      { label: 'Tabaxis', routerLink: 'tabaxis' },
    ];
  }
}
