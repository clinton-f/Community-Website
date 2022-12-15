import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BusinessCardServ } from '../models/services';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BusinessCardService{
  url = 'https://cobblestone-place.netlify.app/api/businesscards/';

  private _refresh$ = new Subject<void>();

  //Every time with save info this will refresh the page.
  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getBusinessCards(): Observable<any> {
    return this.http.get(this.url);
  }

  getBusinessCard(_id: string): Observable<any> {
    return this.http.get(this.url + _id);
  }

  deleteBusinessCard(_id: string): Observable<any> {
    return this.http.delete(this.url + _id);
  } 
          //Pulling the class BusinessCardServ from CMS-WebApp\src\app\models\services.ts
  createBusinessCard(businesscard: BusinessCardServ): Observable<any> {
    return this.http.post(this.url, businesscard)
    .pipe(
      tap(() => {
        this._refresh$.next();
      }));
  }

  updateBusinessCard(_id: string, businesscard: BusinessCardServ): Observable<any> {
    return this.http.put(this.url + _id, businesscard)
    .pipe(
      tap(() => {
        this._refresh$.next();
      }
    ));
    }
}
