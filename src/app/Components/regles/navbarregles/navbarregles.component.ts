import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarregles',
  templateUrl: './navbarregles.component.html',
  styleUrl: './navbarregles.component.css',
})
export class NavbarreglesComponent {
  listRegles: any[];
  /**
   *
   */
  constructor() {
    this.listRegles = [
      { label: 'création de perso', routerLink: '/regles/creation' },
      { label: 'races', routerLink: '/regles/races', children : [
        { label : 'Elfe', routerlink :'/regles/Elfe'},
        { label : 'Halfelin', routerlink :'/regles/Halfelin'},
        { label : 'Humain', routerlink :'/regles/Humain'},
        { label : 'Nain', routerlink :'/regles/Nain'},
        { label : 'Demi-elfe', routerlink :'/regles/Demi-elfe'},
        { label : 'Demi-orc', routerlink :'/regles/Demi-orc'},
        { label : 'Drakéide', routerlink :'/regles/Drakéide'},
        { label : 'Gnome', routerlink :'/regles/Gnome'},
        { label : 'Tieffelin', routerlink :'/regles/Tieffelin'},
      ] },
      { label: 'classes', routerLink: '/regles/classes' },
      { label: 'Historiques', routerLink: '/regles/historiques' },
      {
        label: 'équipements',
        routerLink: '/univers/provincesDeLaelith',
      },
      { label: 'Personnalisation', routerLink: '/regles/laelith' },
      { label: 'Caractéristiques', routerLink: '/univers/plans' },
      { label: 'Aventure', routerLink: 'CultureDrakeide' },
      { label: 'combat', routerLink: 'CultureDrakeide' },
      { label: 'incantations', routerLink: 'CultureDrakeide' },
      { label: 'sorts', routerLink: '/regles/sorts' },
      { label: 'états', routerLink: 'CultureDrow' },
      { label: '[MM] Monstres', routerLink: 'CultureElfique' },
      { label: 'Tous les monstres', routerLink: 'CultureGnome' },
      { label: '[DMG] rencontres', routerLink: 'CultureHalfeline' },
      { label: '[DMG] objets magiques', routerLink: 'CultureNaine' },
      { label: 'tous les objets magiques', routerLink: 'Dragons' },
      { label: '[DMG]pièges', routerLink: 'Gnolls' },
      { label: '[DMG] temps morts', routerLink: 'Gobelins' },
      { label: '[DMG] objet', routerLink: 'Hobgobelins' },
      { label: '[DMG] maladies', routerLink: 'Kenku' },
      { label: '[DMG] poisons', routerLink: 'Kobolds' },
      { label: '[DMG] folie', routerLink: 'Orcs' },
      { label: '[XGTE] pièges', routerLink: 'Tabaxis' },
      { label: '[XGTE] temps morts', routerLink: 'Tabaxis' },
      { label: '[EK] comparses', routerLink: 'Tabaxis' },
    ];
  }
}
