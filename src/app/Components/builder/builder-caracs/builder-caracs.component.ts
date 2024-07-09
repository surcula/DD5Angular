import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-caracs',
  templateUrl: './builder-caracs.component.html',
  styleUrl: './builder-caracs.component.css',
})
export class BuilderCaracsComponent {
  characteristics: { [key: string]: number } = {
    force: 10,
    dexterite: 10,
    constitution: 10,
    intelligence: 10,
    sagesse: 10,
    charisme: 10,
  };
  niveau:number = 1

  diminuer(carac: keyof typeof this.characteristics) {
    if (carac ==="niveau"){
      if(this.niveau > 0) {
        this.niveau --
      }
    }
    else{
      if (this.characteristics[carac] > 0) {
        this.characteristics[carac]--;
      }
    }
   
  }

  augmenter(carac: keyof typeof this.characteristics) {
    if (carac ==="niveau")
      {
        this.niveau ++
      }
    else{
      if (this.characteristics[carac] >= 0) {
        this.characteristics[carac]++;
      }
    }
  }
}
