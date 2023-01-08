import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { BusinessCardServ, EventServ, JobServ, UserServ, CMSServ } from '../models/services';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class BusinessCardService{
  url = 'https://community-website-cms.onrender.com/api/businesscards/';

  private _refresh$ = new Subject<void>();

  //Every time with save info this will refresh the page.
  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getBusinessCards(): Observable<any> {
    return this.http.get(this.url);
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
}

// export class EventService{
//   url = 'http://localhost:4000/api/events/';

//   private _refresh$ = new Subject<void>();

//   //Every time with save info this will refresh the page.
//   get refresh$() {
//     return this._refresh$;
//   }

//   constructor(private http: HttpClient) { }

//   getEvents(): Observable<any> {
//     return this.http.get(this.url);
//   }

//   deleteEvent(_id: string): Observable<any> {
//     return this.http.delete(this.url + _id);
//   } 

//   createEvent(event: EventServ): Observable<any> {
//     return this.http.post(this.url, event)
//     .pipe(
//       tap(() => {
//         this._refresh$.next();
//       }));
      
//   }
// }

// export class JobService{
//   url = 'http://localhost:4000/api/jobs/';

//   private _refresh$ = new Subject<void>();

//   //Every time with save info this will refresh the page.
//   get refresh$() {
//     return this._refresh$;
//   }

//   constructor(private http: HttpClient) { }

//   getJobs(): Observable<any> {
//     return this.http.get(this.url);
//   }

//   deleteJob(_id: string): Observable<any> {
//     return this.http.delete(this.url + _id);
//   } 

//   createJob(job: JobServ): Observable<any> {
//     return this.http.post(this.url, job)
//     .pipe(
//       tap(() => {
//         this._refresh$.next();
//       }));
      
//   }
  
// }

// export class UserService{
//   url = 'http://localhost:4000/api/users/';

//   private _refresh$ = new Subject<void>();

//   //Every time with save info this will refresh the page.
//   get refresh$() {
//     return this._refresh$;
//   }

//   constructor(private http: HttpClient) { }

//   getUsers(): Observable<any> {
//     return this.http.get(this.url);
//   }

//   deleteUser(_id: string): Observable<any> {
//     return this.http.delete(this.url + _id);
//   } 

//   createUser(user: UserServ): Observable<any> {
//     return this.http.post(this.url, user)
//     .pipe(
//       tap(() => {
//         this._refresh$.next();
//       }));
      
//   }
// }

// export class CMSService{
//   url = 'http://localhost:4000/api/cms/';

//   private _refresh$ = new Subject<void>();

//   //Every time with save info this will refresh the page.
//   get refresh$() {
//     return this._refresh$;
//   }

//   constructor(private http: HttpClient) { }

//   getCMS(): Observable<any> {
//     return this.http.get(this.url);
//   }

//   deleteCMS(_id: string): Observable<any> {
//     return this.http.delete(this.url + _id);
//   } 

//   createCMS(cms: CMSServ): Observable<any> {
//     return this.http.post(this.url, cms)
//     .pipe(
//       tap(() => {
//         this._refresh$.next();
//       }));
      
//   }
// }

  
