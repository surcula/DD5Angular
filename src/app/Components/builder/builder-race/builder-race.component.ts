import { Component } from '@angular/core';
import { ListRaces, Races } from '../../../Models/Races';
import { RacesService } from '../../../Services/races.service';
import { Language } from '../../../Models/Language';
@Component({
  selector: 'app-builder-race',
  templateUrl: './builder-race.component.html',
  styleUrl: './builder-race.component.css'

})
export class BuilderRaceComponent {
  raceFocus!: Races;
  listRaces: ListRaces[] = [];
  IsLoaded: boolean = false;
  constructor(
    private racesService: RacesService
  ) {
    this.load();
  }

  public load() {
    this.loadRaces();
  }


  private loadRaces() {
    this.racesService.GetAll().subscribe({
      next: (data: any) => {
        this.listRaces = data;
        this.checkIfLoaded();
      },
      error: (error) => {
        console.log(error);
        this.checkIfLoaded();
      },
    });
  }

  private checkIfLoaded() {
    if (this.listRaces.length > 0) {
      this.IsLoaded = true;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
  select(race: Races, langues: Language[]) {
    this.raceFocus = race;
    this.raceFocus.langue = langues;
  }

}
