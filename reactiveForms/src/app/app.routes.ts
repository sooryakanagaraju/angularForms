import { Routes } from '@angular/router';
import {FormComponent} from './components/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' }, // Redirect root path to /form
  { path: 'form', component: FormComponent }
];
