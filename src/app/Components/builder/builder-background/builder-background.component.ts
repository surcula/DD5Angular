import { Component } from '@angular/core';
import { Backgrounds, listBackgrounds } from '../../../Models/Backgrounds';
import { BackgroundService } from '../../../Services/background.service';
import { Skill } from '../../../Models/Skill';
import { BuilderCharacterService } from '../../../Services/builderCharacter.service';

@Component({
  selector: 'app-builder-background',
  templateUrl: './builder-background.component.html',
  styleUrl: './builder-background.component.css',
})
export class BuilderBackgroundComponent {
  backgroundFocus!: Backgrounds;
  listBackground: listBackgrounds[] = [];
  IsLoaded: boolean = false;
  constructor(
    private backgroundService: BackgroundService,
    private builderService : BuilderCharacterService
  ) {
    this.load();
  }

  public load() {
    this.loadRaces();
  }

  private loadRaces() {
    this.backgroundService.GetAll().subscribe({
      next: (data: any) => {
        this.listBackground = data;
        this.checkIfLoaded();
        this.backgroundFocus = this.listBackground[0].backgrounds
        this.backgroundFocus.skillsBackground = this.listBackground[0].skillsBackground
        
      },
      error: (error) => {
        console.log(error);
        this.checkIfLoaded();
      },
    });
  }

  private checkIfLoaded() {
    if (this.listBackground.length > 0) {
      this.IsLoaded = true;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
  select(background: Backgrounds, skills: Skill[]) {
    this.backgroundFocus = background;
    this.backgroundFocus.skillsBackground = skills;
  }
  addBackground(){
    this.builderService.addBackground(this.backgroundFocus)
  }
}
