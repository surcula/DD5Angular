import { Injectable } from '@angular/core';
import { Classes } from '../Models/Classes';
import { Races } from '../Models/Races';
import { Backgrounds } from '../Models/Backgrounds';
import { Language } from '../Models/Language';
import { Skill } from '../Models/Skill';
import { Feats } from '../Models/Feats';

@Injectable({
  providedIn: 'root'
})
export class BuilderCharacterService {

  race: Races = {} as Races;
  class: Classes = {} as Classes;
  background: Backgrounds = {} as Backgrounds;
  language: Language = {} as Language;
  skill: Skill = {} as Skill;
  feat: Feats = {} as Feats;
  strenght!: number;
  dexterity!: number;
  constitution!: number;
  wisdom!: number;
  intelligence!: number;
  charisma!: number;

  constructor() {
   }

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

  reset(){
    this.race = {} as Races
this.class = {} as Classes
this.background = {} as Backgrounds
this.language = {} as Language;
  this.skill = {} as Skill;
  this.feat = {} as Feats;
  this.strenght = 0;
  this.dexterity = 0;
  this.constitution = 0;
  this.wisdom = 0;
  this.intelligence = 0;
  this.charisma = 0;
  }

}
