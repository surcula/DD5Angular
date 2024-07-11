import { Injectable } from '@angular/core';
import { Classes } from '../Models/Classes';
import { Races } from '../Models/Races';
import { Backgrounds } from '../Models/Backgrounds';
import { Language } from '../Models/Language';
import { Skill } from '../Models/Skill';
import { Feats } from '../Models/Feats';

@Injectable({
  providedIn: 'root',
})
export class BuilderCharacterService {
  race!: Races | undefined;
  class: Classes | undefined;
  background: Backgrounds | undefined;
  language: Language |undefined;
  skill: Skill |undefined;
  feat: Feats | undefined;
  strenght!: number;
  dexterity!: number;
  constitution!: number;
  wisdom!: number;
  intelligence!: number;
  charisma!: number;

  constructor() {}

  addRace(race: Races): void {
    this.race = race;
  }

  addClass(clas: Classes): void {
    this.class = clas;
  }

  addBackground(background: Backgrounds): void {
    this.background = background;
  }

  addLanguage(language: Language): void {
    this.language = language;
  }

  addSkill(skill: Skill): void {
    this.skill = skill;
  }

  addFeat(feat: Feats): void {
    this.feat = feat;
  }

  getCharacterData(): any {
    return {
      race: this.race,
      class: this.class,
      background: this.background,
      language: this.language,
      skill: this.skill,
      feat: this.feat,
    };
  }

  reset() {
    this.race = undefined;
    this.class = undefined;
    this.background = undefined;
    this.language = undefined;
    this.skill = undefined;
    this.feat = undefined;
    this.strenght = 0;
    this.dexterity = 0;
    this.constitution = 0;
    this.wisdom = 0;
    this.intelligence = 0;
    this.charisma = 0;
  }
}
