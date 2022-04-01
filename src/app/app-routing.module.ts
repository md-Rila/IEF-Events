import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { EventDisplayComponent } from './events/event-display/event-display.component';
import { EventsUpdateComponent } from './events/events-update/events-update.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './static/layout/layout.component';

const routes: Routes = [
  
  {
    path:'',
    component: EventDisplayComponent,
    pathMatch: 'full'
  },
  {
    path:'events-update',
    component: EventsUpdateComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./events/events.module').then(
          m=>m.EventsModule
        )
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
