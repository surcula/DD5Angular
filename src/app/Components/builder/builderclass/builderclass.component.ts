import { Component } from '@angular/core';
import { Classes, listClass } from '../../../Models/Classes';
import { ClassesService } from '../../../Services/classes.service';
import { Skill } from '../../../Models/Skill';
import { BuilderCharacterService } from '../../../Services/builderCharacter.service';

@Component({
  selector: 'app-builderclass',
  templateUrl: './builderclass.component.html',
  styleUrl: './builderclass.component.css',
})
export class BuilderclassComponent {
  classFocus: Classes = {} as Classes;
  listClass: listClass[] = [];
  IsLoaded: boolean = false;

  constructor(
    private ClassesService: ClassesService,
    public buildService: BuilderCharacterService
  ) {
    this.classFocus.skills = []
    this.load();
  }

  public load() {
    this.loadClasses();
  }

  private loadClasses() {
    this.ClassesService.GetAll().subscribe({
      next: (data: any) => {
        this.listClass = data;
        this.classFocus = this.listClass[0].classes;
        this.classFocus.skills = this.listClass[0].skills;
        this.checkIfLoaded();
        if (this.buildService.class.class != undefined) {
          this.classFocus = this.buildService.class;
          this.classFocus.skills = this.buildService.class.skills;
        }
      },
      error: (error) => {
        console.log(error);
        this.checkIfLoaded();
      },
    });
  }

  private checkIfLoaded() {
    if (this.listClass.length > 0) {
      this.IsLoaded = true;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
  select(race: Classes, skills: Skill[]) {
    this.classFocus = race;
    this.classFocus.skills = skills;
  }

  addClass() {
    this.buildService.addClass(this.classFocus);
  }
}
