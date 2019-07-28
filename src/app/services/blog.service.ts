import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from './state.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IBLOG, IUPDATE } from '../models/iblog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(
    private http: HttpClient,
    private state: StateService
  ) { }

  init$(): Observable<IBLOG> {
    return this.http.get<IBLOG>(`${environment.API_URL}/blog`).pipe(
      tap(blog => this.state.setStore(blog))
    );
  }

  get getBlog(): Observable<IBLOG> {
    return this.state.blogStore$;
  }

  addClapping(starsObj: IUPDATE) {
    this.state.setStore(starsObj);
  }
}
