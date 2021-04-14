import { Injectable } from '@angular/core';
import * as jwtEncode from 'jwt-encode';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap, filter, tap, toArray } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  getUser(action): any {
    return this.http.get(`http://localhost:3000/users`).pipe(
      map((s$) => {
        let f = Array.prototype.slice.call(s$);
        let user = f.find(
          (el) => el.email === action.email && el.password === action.password
        );
        if (!user) {
          return false;
        }
        const token = this.createToken(user);
        localStorage.setItem('token', JSON.stringify(token));

        const sendObj = { email: user.email, password: user.password, token };

        return sendObj;
      })
    );
  }

  createToken(obj) {
    return jwtEncode(obj, 'sekret');
  }
}
