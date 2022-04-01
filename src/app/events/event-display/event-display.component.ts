import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

export class Event{
  constructor(
    public eventname: string,
    public clubname: string,
    public eventdesc: string,
    public eventdate: Date,
    public brochure: String,
    public registrationlink: string
  ){ }
}

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  eventList? : Event[];
  geturl='http://localhost:5000/events_ief/event-display'
  constructor( private router: Router, private api: ApiServiceService, private http: HttpClient) { }


  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails()
  {
    return this.http.get<any>( this.geturl).subscribe(
      res =>{
        console.log(res);
        this.eventList = res;
      }
    )
  }
}

