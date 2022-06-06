import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BusinessCardService } from '../services/businesscards.service';
import { EventService } from '../services/events.service';
import { JobService } from '../services/jobs.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BusinessCardServ } from '../models/services';
import { EventServ } from '../models/services';
import { JobServ } from '../models/services';



@Component({
  selector: 'bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})

export class BulletinComponent implements OnInit {
  searchTextBusiness: any;
  searchTextEvent: any;
  searchTextJob: any;

  listBusinesscards: BusinessCardServ [] = [];
  listEvents: EventServ [] = [];
  listJobs: JobServ [] = [];

  _subscription!: Subscription;

  constructor(
    private modalService: NgbModal,

    private _businessCardService: BusinessCardService,
    private _eventService: EventService,
    private _jobService: JobService,

    private router: Router
    ) { }


  ngOnInit(): void {
    this.getBusinessCards();
    this._subscription = this._businessCardService.refresh$.subscribe(() => {
      this.getBusinessCards();
    });

    this.getEvents();
    this._subscription = this._eventService.refresh$.subscribe(() => {
      this.getEvents();
    });
    
    this.getJobs();
    this._subscription = this._jobService.refresh$.subscribe(() => {
      this.getJobs();
    });

  }
  
  getBusinessCards() {
  this._businessCardService.getBusinessCards().subscribe(data => {
    console.log(data);
    this.listBusinesscards = data;
  }, error => {
    console.log(error);
  })
}

  getEvents() {
    this._eventService.getEvents().subscribe(data => {
      console.log(data);
      this.listEvents = data;
    }, error => {
      console.log(error);
    })
  }

  getJobs() {
    this._jobService.getJobs().subscribe(data => {
      console.log(data);
      this.listJobs = data;
    }, error => {
      console.log(error);
    })
  }


  openJobPopUp(JobPopUp: any) {
    const modalRef = this.modalService.open(JobPopUp);
    modalRef.componentInstance;
  }



}
