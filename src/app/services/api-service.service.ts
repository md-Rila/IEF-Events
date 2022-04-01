import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url='http://localhost:5000/events_ief/event-update';
  constructor( private http: HttpClient) { }
  postEventDetails(data: any): Observable<any>
  {
    console.log("Received to api service")
    console.log(data);
    return this.http.post( this.url, data );
  }
}
