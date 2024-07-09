import { Sources } from "./Sources";

export interface Races {
  id: number;
  Race:string;
  strenghtBonus:number;
  dexterityBonus:number;
  constitutionBonus:number;
  wisdomBonus:number;
  intelligenceBonus:number;
  charismaBonus:number;
  Size:string;
  Speed:number;
  source:Sources;
}