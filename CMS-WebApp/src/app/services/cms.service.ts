import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMSServ } from "../models/services";
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class CMSService{
    url = 'http://localhost:4000/api/cms/';
  
    private _refresh$ = new Subject<void>();
  
    //Every time with save info this will refresh the page.
    get refresh$() {
      return this._refresh$;
    }
  
    constructor(private http: HttpClient) { }
  
    getCMS(): Observable<any> {
      return this.http.get(this.url);
    }
  
    deleteCMS(_id: string): Observable<any> {
      return this.http.delete(this.url + _id);
    } 
  
    // createCMS(cms: CMSServ): Observable<any> {
    //   return this.http.post(this.url, cms)
    //   .pipe(
    //     tap(() => {
    //       this._refresh$.next();
    //     }));
        
    // }

      updateCMS(_id: string, cms: CMSServ): Observable<any> {
        return this.http.put(this.url + _id, cms)
        .pipe(
          tap(() => {
            this._refresh$.next();
          }
        ));
        }
  }