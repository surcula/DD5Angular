import { Language } from "./Language";
import { Sources } from "./Sources";

export interface ListRaces {
  race: Races;
  languages: Language[];
}
export interface Races {
  id: number;
  race:string;
  strenghtBonus:number;
  dexterityBonus:number;
  constitutionBonus:number;
  wisdomBonus:number;
  intelligenceBonus:number;
  charismasBonus:number;
  size:string;
  speed:number;
  source:Sources;
  langue:Language[]
}