import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../Models/Classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private url: string = 'https://localhost:7032/api/Class';

  constructor(private client: HttpClient) {}

  public GetAll():Observable<Classes[]>{
    return this.client.get<Classes[]>(this.url);
  }
}
