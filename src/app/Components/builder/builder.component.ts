import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { Classes, Test } from '../../Models/Classes';
import { Races } from '../../Models/Races';
import { RacesService } from '../../Services/races.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent {
  listClasses: Test[] = [];
  listRaces: Races[] = [];
  IsLoaded: boolean = false;

  constructor(
    private classesService: ClassesService,
    private racesService: RacesService
  ) {
    this.load();
  }

  public load() {
    this.loadClasses();
    this.loadRaces();
  }

  private loadClasses() {
    this.classesService.GetAll().subscribe({
      next: (data: any) => {
        this.listClasses = data;
        this.checkIfLoaded();
      },
      error: (error) => {
        console.log(error);
        this.checkIfLoaded();
      },
    });
  }

  private loadRaces() {
    this.racesService.GetAll().subscribe({
      next: (data: Races[]) => {
        this.listRaces = data;
        console.log('Races loaded:', this.listRaces);
        this.checkIfLoaded();
      },
      error: (error) => {
        console.log(error);
        this.checkIfLoaded();
      },
    });
  }

  private checkIfLoaded() {
    if (this.listClasses.length > 0 && this.listRaces.length > 0) {
      this.IsLoaded = true;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
