import { Component } from '@angular/core';
import { ScrollService } from '../../../Services/scroll.service';

@Component({
  selector: 'app-pantheon',
  templateUrl: './pantheon.component.html',
  styleUrl: './pantheon.component.css'
})
export class PantheonComponent {
  constructor(private scrollService: ScrollService) { }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }
}
