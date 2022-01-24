import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as action from 'src/app/core/data/state/data.actions';
import { MaptilerApiService } from 'src/app/services/maptiler-api.service';

@Injectable()
export class ManagerEffects {

  constructor(private actions$: Actions,
              private mapService: MapService,
              private maptilerApiService: MaptilerApiService,
              private store: Store,
              public router: Router) {}

  data$ = createEffect(() => this.actions$.pipe(
      ofType(action.DATA_GET_REQUEST),
      switchMap((props) => this.maptilerApiService.getFeatures(props).pipe(
        map(data => action.dataGetSuccess({ payload: data })),
        catchError((err: any) => of(action.dataGetError({ err: err.message })))
      ))
    )
  );

  customData$ = createEffect(() => this.actions$.pipe(
      ofType(action.CUSTOM_DATA_GET_REQUEST),
      switchMap((props) => this.maptilerApiService.getCustomFeatures(props).pipe(
        map(data => action.customDataGetSuccess({ payload: data })),
        catchError((err: any) => of(action.dataGetError({ err: err.message })))
      ))
    )
  );
}
