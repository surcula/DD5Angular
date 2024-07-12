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
      { label: 'création de perso', routerLink: 'creation'},
      { label: 'races', routerLink: 'races'},
      { label: 'classes', routerLink: 'classes'},
      { label: 'Historiques', routerLink: 'historiques'},
      { label: 'équipements', routerLink: 'equipements'},
      { label: 'Personnalisation', routerLink: 'personnalisation' },
      { label: 'Caractéristiques', routerLink: 'caracteristiques' },
      { label: 'Aventure', routerLink: 'aventure' },
      { label: 'combat', routerLink: 'combat' },
      { label: 'incantations', routerLink: 'incantations' },
      { label: 'sorts', routerLink: 'sorts' },
      { label: 'états', routerLink: 'etats' },
      // { label: '[MM] Monstres', routerLink: 'Monstres' },
      { label: 'Tous les monstres', routerLink: 'tousLesMonstres' },
      // { label: '[DMG] rencontres', routerLink: 'rencontres' },
      // { label: '[DMG] objets magiques', routerLink: 'objetsMagiques' },
      { label: 'tous les objets magiques', routerLink: 'tousLesObjetsMagiques' },
      // { label: '[DMG]pièges', routerLink: 'pièges' },
      // { label: '[DMG] temps morts', routerLink: 'tempsMorts' },
      // { label: '[DMG] objet', routerLink: 'objet' },
      // { label: '[DMG] maladies', routerLink: 'maladies' },
      // { label: '[DMG] poisons', routerLink: 'poisons' },
      // { label: '[DMG] folie', routerLink: 'folie' },
      // { label: '[XGTE] pièges', routerLink: 'pieges' },
      // { label: '[XGTE] temps morts', routerLink: 'tempsMorts' },
      // { label: '[EK] comparses', routerLink: 'Tabaxis' },
    ];
  }
}
