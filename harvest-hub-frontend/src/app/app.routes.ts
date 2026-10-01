import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Farms } from './farms/farms';
import { Fields } from './fields/fields';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'farms',
    component: Farms,
    canActivate: [authGuard]
  },

  {
    path: 'fields',
    component: Fields,
    canActivate: [authGuard]
  },

  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }

];