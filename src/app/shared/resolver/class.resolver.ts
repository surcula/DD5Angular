import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassesService } from '../../Services/classes.service';
import { Classes } from '../../Models/Classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesResolver implements Resolve<Classes[]> {
  constructor(private classesService: ClassesService) {}

  resolve(): Observable<Classes[]> {
    return this.classesService.GetAll();
  }
}