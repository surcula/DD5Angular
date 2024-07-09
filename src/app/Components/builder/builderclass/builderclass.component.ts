import { Component } from '@angular/core';
import { Classes, listClass } from '../../../Models/Classes';
import { ClassesService } from '../../../Services/classes.service';
import { Skill } from '../../../Models/Skill';

@Component({
  selector: 'app-builderclass',
  templateUrl: './builderclass.component.html',
  styleUrl: './builderclass.component.css'
})
export class BuilderclassComponent {
  classFocus!: Classes;
  listClass: listClass[] = [];
  IsLoaded: boolean = false;
  
   
   constructor(private ClassesService : ClassesService) {
    this.load();
   }

  public load() {
    this.loadClasses();
  }


  private loadClasses() {
    this.ClassesService.GetAll().subscribe({
      next: (data: any) => {
        this.listClass = data;
        this.checkIfLoaded();
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
}
