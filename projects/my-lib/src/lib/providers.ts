import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import * as MyEffects from './store/my-effects.effects';

export const provideStore = (): EnvironmentProviders =>
  makeEnvironmentProviders([provideEffects(MyEffects)]);

export const provideLib = (): EnvironmentProviders =>
  makeEnvironmentProviders([provideStore()]);
