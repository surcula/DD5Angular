import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollService } from './scroll.service';

@Injectable()
export class ScrollTopInterceptor {
  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('NavigationEnd event:', event);
        this.scrollService.scrollToTop();
      });
  }
}
