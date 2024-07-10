import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuilderCharacterService } from '../../../Services/builderCharacter.service';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrl: './builder-home.component.css',
})
export class BuilderHomeComponent implements OnDestroy, OnInit {

  constructor(
    private router: Router,
    private builderService : BuilderCharacterService
  ) {}


  ngOnInit(): void {
    this.builderService.reset();
  }


  ngOnDestroy(): void {
    this.builderService.reset();
  }

  navigateToRace() {
    this.router.navigate(['race']);
  }
}
