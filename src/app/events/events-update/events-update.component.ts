import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from  '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})
export class EventsUpdateComponent implements OnInit {

  eventsForm = new FormGroup(
    {
      eventname: new FormControl(''),
      clubname: new FormControl(''),
      eventdesc: new FormControl(''),
      eventdate: new FormControl(''),
      brochure: new FormControl(),
      registrationlink: new FormControl('')
    }
  )
  constructor(
    private route: Router,
    private api: ApiServiceService,
    private formBuilder: FormBuilder
  ) { }
  eventsupdate(value: any)
{
  //console.log(this.eventsForm.value);
  this.api.postEventDetails(value).subscribe();
}    
  ngOnInit(): void {
  }

}
