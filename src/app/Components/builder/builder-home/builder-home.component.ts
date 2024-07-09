import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrl: './builder-home.component.css',
})
export class BuilderHomeComponent {
  constructor(private router: Router) {}

  navigateToRace() {
    this.router.navigate(['race']);
  }
}
