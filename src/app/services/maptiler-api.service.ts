import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BASE_MAPTILER_URL, ID, FEATURE_JSON, DATA } from '../constats/url.constants';
import db from 'src/assets/db';
import { ICoreState, IDataState } from 'src/app/core/interfaces/core.interfaces';

@Injectable({ providedIn: 'root' })
export class MaptilerApiService {

  constructor(private http: HttpClient) {}

  public getFeatures(): Observable<IDataState> {
    return this.http.get<IDataState>(`${BASE_MAPTILER_URL}/${DATA}/${ID}/${FEATURE_JSON}`);
  }

  public getCustomFeatures(): Observable<IDataState>{
    return of(db);
  }

}
