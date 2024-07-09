import { Skill } from './Skill';
import { Sources } from './Sources';

export interface Test {
  classes: Classes;
  skills: Skill[];
}

export interface Classes {
  id: number;
  class: string;
  strenghtBonus: number;
  dexterityBonus: number;
  constitutionBonus: number;
  wisdomBonus: number;
  intelligenceBonus: number;
  charismaBonus: number;
  dv: number;
  nbSkill: number;
  source: Sources;
}
