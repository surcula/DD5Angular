import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spells } from '../Models/Spells';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private url: string = 'https://localhost:7032/api/spell';

  constructor(private client: HttpClient) {}

  public GetAll(): Observable<Spells[]> {
    return this.client.get<Spells[]>(this.url);
  }
}
