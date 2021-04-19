import { Injectable } from '@angular/core';
import * as jwtEncode from 'jwt-encode';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap, filter, tap, toArray, dematerialize, every, mapTo, scan } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { User } from '../core/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  // getUser(action): Observable<false | User> {
  //   return this.http.get(`http://localhost:3000/users`).pipe(
  //     map((users) => {
  //       console.log("users====", users)
  //       let f = Array.prototype.slice.call(users);
  //       console.log("Array.prototype.slice.call(users)===", f)
  //       let user = f.find(
  //         (el) => el.email === action.email && el.password === action.password
  //       );
  //       if (!user) {
  //         return false;
  //       }
  //       const token = this.createToken(user);
  //       localStorage.setItem('token', JSON.stringify(token));

  //       const sendObj = { email: user.email, password: user.password, token };

  //       return sendObj;
  //     })
  //   );
  // }

  getUser(action): Observable<false | User> {
    return this.http.get(`http://localhost:3000/users`).pipe(
      map((users) => {
        let arrUsers = [].concat(users)
        let user = arrUsers.find(
          (el) => el.email === action.email && el.password === action.password
        );

        if (!user) {
          return false;
        }

        const token = this.createToken(user);
        localStorage.setItem('token', JSON.stringify(token));

        return { email: user.email, password: user.password, token };

      })
    );
  }

  createToken(obj) {
    return jwtEncode(obj, 'sekret');
  }

  registerUserRequest(credentials) {
    return this.http.post('http://localhost:3000/users', credentials);
  }


}
