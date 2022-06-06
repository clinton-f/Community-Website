// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { BusinessCardServ, EventServ, JobServ } from '../models/services';
// //import { BusinessCardServ, EventServ, JobServ } from './services';
// import { BusinessCardService, EventService, JobService } from './services.service';



// @Component({
//   selector: 'root',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.scss']
// })
// export class ServicesComponent implements OnInit {

//   businessCardForm: FormGroup;
//   eventForm: FormGroup;
//   jobForm: FormGroup;

//   constructor(private modalService: NgbModal, 
//     private modalEvent: NgbModal, 
//     private bcfb: FormBuilder, 
//     private evntfb: FormBuilder, 
//     private jbfb: FormBuilder, 
//     private _businessCardService: BusinessCardService,
//     private _jobService: JobService,
//     private _eventService: EventService) {  
    
//   this.businessCardForm = this.bcfb.group({ 
//       bName: ['', Validators.required],
//       bServ: ['', Validators.required],
//       email: ['', Validators.required],
//       phone: ['', Validators.required],
//       website: ['', ''],
//       name: ['', Validators.required],
//       title: ['', Validators.required]
//   });

//   this.eventForm = this.evntfb.group({
//     eventName: ['', Validators.required],
//     eventDesc: ['', Validators.required],
//     email: ['', Validators.required],
//     creatorName: ['', Validators.required],
//     eventLocation: ['', Validators.required],
//     eventStart: ['', Validators.required],
//     eventEnd: ['', Validators.required],
//   })
  
//   this.jobForm = this.jbfb.group({
//     jobName: ['', Validators.required],
//     jobDesc: ['', Validators.required],
//     email: ['', Validators.required],
//     creatorName: ['', Validators.required],
//     jobLocation: ['', Validators.required],
//     phone: ['', Validators.required],
//   })
// }
  
//   openServPopUp(ServPopUp: any) {
//     const modalRef = this.modalService.open(ServPopUp);
//     modalRef.componentInstance;
//   }

//   public isServsCollapsed = true;
 

//   openEventPopUp(EventPopUp: any) {
//     const modalRef = this.modalEvent.open(EventPopUp);
//     modalRef.componentInstance;
//   }
  
//   public isEventsCollapsed = true;

//   openJobsPopUp(JobPopUp: any) {
//     const modalRef = this.modalService.open(JobPopUp);
//     modalRef.componentInstance;
//   }

//   public isJobsCollapsed = true;

//   addBusinessCard() {
//     const BUSINESSCARD: BusinessCardServ = {
//       name: this.businessCardForm.get('name')?.value,
//       title: this.businessCardForm.get('title')?.value,
//       email: this.businessCardForm.get('email')?.value,
//       phone: this.businessCardForm.get('phone')?.value,
//       website: this.businessCardForm.get('website')?.value,
//       bName: this.businessCardForm.get('bName')?.value,
//       bServ: this.businessCardForm.get('bServ')?.value,
//     }
//     console.log(BUSINESSCARD);
//   }

//   submitEvent() {
//     const EVENTFORM: EventServ = {
//       eventName: this.eventForm.get('eventName')?.value,
//       eventDesc: this.eventForm.get('eventDesc')?.value,
//       email: this.eventForm.get('email')?.value,
//       creatorName: this.eventForm.get('creatorName')?.value,
//       eventLocation: this.eventForm.get('eventLocation')?.value,
//       eventStart: this.eventForm.get('eventStart')?.value,
//       eventEnd: this.eventForm.get('eventEnd')?.value,
//     }
//     console.log(EVENTFORM);
//   }

//   submitJob() {
//     const JOBFORM: JobServ = {
//       jobName: this.jobForm.get('jobName')?.value,
//       jobDesc: this.jobForm.get('jobDesc')?.value,
//       email: this.jobForm.get('email')?.value,
//       creatorName: this.jobForm.get('creatorName')?.value,
//       jobLocation: this.jobForm.get('jobLocation')?.value,
//       phone: this.jobForm.get('phone')?.value,
//     }
//     console.log(JOBFORM);
//   }

  
//   ngOnInit(): void {
//     this.getAllBusinessCards();
//     // this.getEvents();
//     // this.getJobs();


//   }


//   getAllBusinessCards() {
//     this._businessCardService.getBusinessCards().subscribe((data: any) => {
//       console.log(data);
//     }, (error: any) => {
//       console.log(error);
//     })
//   }

//   getEvents() {
//     this._eventService.getEvents().subscribe((data: any) => {
//       console.log(data);
//     }, (error: any) => {
//       console.log(error);
//     })
//   }

//   getJobs() {
//     this._jobService.getJobs().subscribe((data: any) => {
//       console.log(data);
//     }, (error: any) => {
//       console.log(error);
//     })
//   }

// }


