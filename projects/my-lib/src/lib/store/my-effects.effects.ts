import { inject } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

export const loadClientById = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe();
  },
  { functional: true, dispatch: false }
);
