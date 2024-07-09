import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Races } from '../Models/Races';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  private url: string = 'https://localhost:7032/api/race';

  constructor(private client: HttpClient) {}

  public GetAll():Observable<Races[]>{
    return this.client.get<Races[]>(this.url);
  }
}
