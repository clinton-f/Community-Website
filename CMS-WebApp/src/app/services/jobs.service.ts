import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobServ } from "../models/services";
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class JobService{
    url = 'http://localhost:4000/api/jobs/';
  
    private _refresh$ = new Subject<void>();
  
    //Every time with save info this will refresh the page.
    get refresh$() {
      return this._refresh$;
    }
  
    constructor(private http: HttpClient) { }
  
    getJobs(): Observable<any> {
      return this.http.get(this.url);
    }

    getJob(_id: string): Observable<any> {
      return this.http.get(this.url + _id);
    }
  
    deleteJob(_id: string): Observable<any> {
      return this.http.delete(this.url + _id);
    } 
  
    createJob(job: JobServ): Observable<any> {
      return this.http.post(this.url, job)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })); 
    }

    updateJob(_id: string, job: JobServ): Observable<any> {
      return this.http.put(this.url + _id, job)
      .pipe(
        tap(() => {
          this._refresh$.next();
        }
      ));
    }
  }