import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  listEvents: Event[] = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((data: Event[]) => {
      this.listEvents = data;
    }
    );

  }
  inscription(eventId: number) {
    console.log(eventId);
  }
}
