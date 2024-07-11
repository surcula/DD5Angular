import { Component } from '@angular/core';
import { BuilderCharacterService } from '../../../Services/builderCharacter.service';

@Component({
  selector: 'app-builder-caracs',
  templateUrl: './builder-caracs.component.html',
  styleUrl: './builder-caracs.component.css',
})
export class BuilderCaracsComponent {
  characteristics: { [key: string]: number } = {
    force: 10,
    dexterite: 10,
    constitution: 10,
    intelligence: 10,
    sagesse: 10,
    charisme: 10,
  };
  niveau: number = 1;
  dice: number[][] = [];

  constructor(public builderService: BuilderCharacterService) {
    for (let i = 0; i < 6; i++) {
      this.dice[i] = [];
      for (let j = 0; j < 4; j++) {
        this.dice[i].push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
      }
    }
    if (this.builderService.strenght > 0) {
      this.characteristics['force'] = this.builderService.strenght;
      this.characteristics['dexterite'] = this.builderService.dexterity;
      this.characteristics['intelligence'] = this.builderService.intelligence;
      this.characteristics['constitution'] = this.builderService.constitution;
      this.characteristics['sagesse'] = this.builderService.wisdom;
      this.characteristics['charisme'] = this.builderService.charisma;
    }
  }
  diminuer(carac: keyof typeof this.characteristics) {
    if (carac === 'niveau') {
      if (this.niveau > 1) {
        this.niveau--;
      }
    } else {
      if (this.characteristics[carac] > 0) {
        this.characteristics[carac]--;
      }
    }
  }

  augmenter(carac: keyof typeof this.characteristics) {
    if (carac === 'niveau') {
      this.niveau++;
    } else {
      if (this.characteristics[carac] >= 0) {
        this.characteristics[carac]++;
      }
    }
  }

  getSum(row: number[]) {
    return row
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((sum, value) => sum + value, 0);
  }

  getTotal(carac: keyof typeof this.characteristics): number {
    let bonus: number = 0;
    switch (carac) {
      case 'force':
        bonus = this.builderService.race.strenghtBonus;
        break;
      case 'dexterite':
        bonus = this.builderService.race.dexterityBonus;
        break;
      case 'constitution':
        bonus = this.builderService.race.constitutionBonus;
        break;
      case 'intelligence':
        bonus = this.builderService.race.intelligenceBonus;
        break;
      case 'sagesse':
        bonus = this.builderService.race.wisdomBonus;
        break;
      case 'charisme':
        bonus = this.builderService.race.charismasBonus;
        break;
    }
    let total: number = this.characteristics[carac];
    return +(total) + (+bonus);
  }
  addCaracs() {
    this.builderService.strenght = this.characteristics['force'];
    this.builderService.dexterity = this.characteristics['dexterite'];
    this.builderService.intelligence = this.characteristics['intelligence'];
    this.builderService.constitution = this.characteristics['constitution'];
    this.builderService.wisdom = this.characteristics['sagesse'];
    this.builderService.charisma = this.characteristics['charisme'];
  }
}
