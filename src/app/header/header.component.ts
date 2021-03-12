import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginAction } from '../core/store/action';
import { State, getUser } from '../core/store/index';
import { User } from '../core/interfaces';

import { ofType, Actions, createEffect } from '@ngrx/effects';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
