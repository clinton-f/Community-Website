import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {EventServ } from '../models/services';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class EventService{
    url = 'http://localhost:4000/api/events/';
  
    private _refresh$ = new Subject<void>();
  
    //Every time with save info this will refresh the page.
    get refresh$() {
      return this._refresh$;
    }
  
    constructor(private http: HttpClient) { }
  
    getEvents(): Observable<any> {
      return this.http.get(this.url);
    }

    getEvent(_id: string): Observable<any> {
      return this.http.get(this.url + _id);
    }
  
    deleteEvent(_id: string): Observable<any> {
      return this.http.delete(this.url + _id);
    } 
  
    createEvent(event: EventServ): Observable<any> {
      return this.http.post(this.url, event)
      .pipe(
        tap(() => {
          this._refresh$.next();
     }));   
    }

    updateEvent(_id: string, event: EventServ): Observable<any> {
      return this.http.put(this.url + _id, event)
      .pipe(
        tap(() => {
          this._refresh$.next();
     }));   
    }
  }