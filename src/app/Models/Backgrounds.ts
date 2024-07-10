import { Skill } from './Skill';
import { Sources } from './Sources';

export interface listBackgrounds {
  backgrounds : Backgrounds;
  skillsBackground : Skill[];
}

export interface Backgrounds {
  id: number;
  background: string;
  languageNumber: number;
  feature: string;
  featureDescription: number;
  sourceId: number;
  source: Sources;
  skillsBackground : Skill[]
}