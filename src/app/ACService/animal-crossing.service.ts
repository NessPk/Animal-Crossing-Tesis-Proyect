import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalCrossingService {
  getVillagers() {
    throw new Error('Method not implemented.');
  }
  apiUrl: string = environment.api_url;
  apikey: string = environment.firebaseConfig.api_key;

  constructor(private http: HttpClient) {}

  obtainVillager(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/villagers', {
      headers: new HttpHeaders({
        'X-API-KEY': this.apikey
      })
    })
    .pipe(
      map(response => response)
    );
  }
}