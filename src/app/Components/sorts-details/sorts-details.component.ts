import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spells } from '../../Models/Spells';
import { SpellsService } from '../../Services/spells.service';

@Component({
  selector: 'app-sorts-details',
  templateUrl: './sorts-details.component.html',
  styleUrl: './sorts-details.component.css',
})
export class SortsDetailsComponent {
  spell!: Spells;

  constructor(private router: ActivatedRoute, private spellsService: SpellsService) {
    this.load();
  }
  load() {
    const id = this.router.snapshot.paramMap.get('id');   
    this.spellsService.GetById(id).subscribe({
      next: (data: Spells) => {
        this.spell = data;       
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
