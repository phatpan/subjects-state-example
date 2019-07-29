import { Injectable } from '@angular/core';
import { State } from './state';
import { Observable, throwError } from 'rxjs';
import { Profile } from './profile.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, catchError, delay } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends State {

  constructor(private http: HttpClient, private router: Router) {
    super();
    // Clear any state errors on navigation event
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.dismissError();
        }
      }
    );
  }

  init(): Observable<Profile> {
    return this.http.get<Profile>(`${environment.API_URL}/profile`).pipe(
      tap(profile => { this.setProfileStore(profile); }),
      catchError(error => this.onError(error))
    );
  }

  updateProfile(object: Profile): Observable<Profile> {
    this.setProfileStore(object);
    return this.http.post<Profile>(`${environment.API_URL}/profile`, object).pipe(
      tap(profile => { this.setProfileStore(profile); }),
      catchError(error => this.onError(error))
    );
  }

  private onError(err: any) {
    this.stateError(err.error);
    return throwError(err.error);
  }
}
