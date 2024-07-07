import { Sources } from "./Sources";

export interface Spells {
  id: number;
  name: string;
  level: number;
  school: string;
  range: string;
  components: string;
  castingTime: string;
  duration: string;
  description: string;
  higherLevel: string;
  sourceId: number;
  source:Sources
}
