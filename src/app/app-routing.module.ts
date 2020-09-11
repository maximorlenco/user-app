import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {MultiFilterUserContainerComponent} from './multi-filter-user-container/multi-filter-user-container.component';

const routes: Routes = [
  {
    path: 'users/:parameter/:value',
    component: AppComponent
  },
  {
    path: 'users/:firstParam/:firstValue/:lastParam/:lastValue',
    component: MultiFilterUserContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
