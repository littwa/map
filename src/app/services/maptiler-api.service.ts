import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_MAPTILER_URL, ID, FEATURE_JSON, DATA } from '../constats/url.constants';

@Injectable({ providedIn: 'root' })
export class MaptilerApiService {

  constructor(private http: HttpClient) {}

  public getFeatures(): Observable<any>{
    return this.http.get(`${BASE_MAPTILER_URL}/${DATA}/${ID}/${FEATURE_JSON}`);
  }

}
