import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserServ } from "../models/services";
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    url = 'http://localhost:4000/api/users/';
  
    private _refresh$ = new Subject<void>();
  
    //Every time with save info this will refresh the page.
    get refresh$() {
      return this._refresh$;
    }
  
    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<any> {
      return this.http.get(this.url);
    }

    getUser(_id: string): Observable<any> {
      return this.http.get(this.url + _id);
    }
  
    deleteUser(_id: string): Observable<any> {
      return this.http.delete(this.url + _id);
    } 
  
    createUser(user: UserServ): Observable<any> {
      return this.http.post(this.url, user)
      .pipe(
        tap(() => {
          this._refresh$.next();
        }
        ));      
    }

    updateUser(_id: string, user: UserServ): Observable<any> {
      return this.http.put(this.url + _id, user)
      .pipe(
        tap(() => {
          this._refresh$.next();
        }
      ));
    }
  }