import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadLocationSuccess, onLoadLocations } from './location.action';
import { map, switchMap } from 'rxjs';

@Service()
export class LocationEffect {
    
  http = inject(HttpClient);
  actions = inject(Actions);

  loadLocations$ = createEffect(() =>
    this.actions.pipe(
      ofType(onLoadLocations),
      switchMap(() =>
        this.http
          .get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations')
          .pipe(map((locations) => loadLocationSuccess({ locations }))),
      ),
    ),
  );

}
