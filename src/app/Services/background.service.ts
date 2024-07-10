import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Backgrounds } from '../Models/Backgrounds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private url: string = 'https://localhost:7032/api/Background';

  constructor(private client: HttpClient) {}

  public GetAll(): Observable<Backgrounds[]> {
    return this.client.get<Backgrounds[]>(this.url);
  }
}
