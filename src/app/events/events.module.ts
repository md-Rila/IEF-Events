import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventsUpdateComponent } from './events-update/events-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder,FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from  '@angular/forms';
import {FileInputAccessorModule} from "file-input-accessor";
const routes: Routes = [
  {
    path: 'event-display',
    component: EventDisplayComponent
  },
  {
    path: 'event-update',
    component: EventsUpdateComponent
  }

]


@NgModule({
  declarations: [
    EventDisplayComponent,
    EventsUpdateComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,
      FileInputAccessorModule
  ],
  exports: [ EventDisplayComponent, EventsUpdateComponent ]
})
export class EventsModule { }