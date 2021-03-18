import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Store } from '@ngrx/store';
import { getUser } from './core/store/index';
import { first, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let f$ = this.store.select(getUser);
    // console.log(f$);
    let isUser;

    f$.subscribe((v) => {
      isUser = v;
    });

    // console.log(7, !!isUser);

    return !!isUser;
  }
}
