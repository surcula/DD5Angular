import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { Classes, listClass } from '../../Models/Classes';
import { ListRaces, Races } from '../../Models/Races';
import { RacesService } from '../../Services/races.service';
import { Language } from '../../Models/Language';
import { BuilderCharacterService } from '../../Services/builderCharacter.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent {
  
  
  /**
   *
   */
  constructor(public builderService : BuilderCharacterService) {
   
    
  }
}
