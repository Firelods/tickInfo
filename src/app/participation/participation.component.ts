import { ParticipationService } from './../service/participation.service';
import { EventsService } from '../service/events.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Event } from '../interfaces/event';
@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  eventFormControl = new FormControl('', [Validators.required]);
  surNameFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  selectedEvent: string = "";
  listEvents: Event[] = [];
  constructor(private EventsService: EventsService, private ParticipationService: ParticipationService) { }

  ngOnInit(): void {
    this.EventsService.getEvents().subscribe((data: any) => {
      this.listEvents = data;
    });
  }
  submit() {
    if (this.emailFormControl.invalid || this.eventFormControl.invalid || this.emailFormControl.value == null || this.eventFormControl.value == null || this.surNameFormControl.value == null || this.nameFormControl.value == null) {
      return;
    }
    this.ParticipationService.participate(this.emailFormControl.value, this.surNameFormControl.value, this.nameFormControl.value, this.eventFormControl.value);
  }
}
