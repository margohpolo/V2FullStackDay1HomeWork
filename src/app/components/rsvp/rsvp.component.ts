import { Component, OnInit } from '@angular/core';
import { RSVP } from '../../model/RSVPmodel';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit {
  model: RSVP;
  attendances = [
    {name: "Yes", code:"Yes"},
    {name: "No", code:"No"},  
  ]
  constructor() { 
    this.model = new RSVP('', '', '', '0: Yes');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submitted!");
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.contactNo);
    console.log(this.model.attending);
  }

  resetForm() {
    this.model = new RSVP('', '', '', '0: Yes');
  }

}
