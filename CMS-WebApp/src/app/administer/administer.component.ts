import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// For Validation and Registration
import { BusinessCardServ, EventServ, JobServ } from '../models/services';

// For Backend API
import { BusinessCardService } from "../services/businesscards.service";
import { EventService } from "../services/events.service";
import { JobService } from "../services/jobs.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

//const BusinessCard = require('models/BusinessCard');
@Component({
  selector: 'administer',
  templateUrl: './administer.component.html',
  styleUrls: ['./administer.component.scss']
})


export class AdministerComponent implements OnInit {
  searchTextBusiness: any;
  searchTextEvent: any;
  searchTextJob: any;
  listBusinesscards: BusinessCardServ [] = [];
  listEvents: EventServ [] = [];
  listJobs: JobServ [] = [];

  _subscription!: Subscription;

  businessCardForm: FormGroup;
  eventForm: FormGroup;
  jobForm: FormGroup;
  _id: any| null;
  
  constructor(
    // this for the business card form
    private modalService: NgbModal, 
    // this for the event and job form
    private modalEvent: NgbModal, 

    private bcfb: FormBuilder, 
    private evntfb: FormBuilder, 
    private jbfb: FormBuilder, 

    private _businessCardService: BusinessCardService, 
    private _eventService: EventService, 
    private _jobService: JobService,

    private router: Router,
    private aRouter: ActivatedRoute

  ) {
    //Form Validation
  this.businessCardForm = this.bcfb.group({
      name: ['', Validators.required], 
      title: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', ''],
      bName: ['', Validators.required],
      bServ: ['', Validators.required]
  });

  this.eventForm = this.evntfb.group({
    eventName: ['', Validators.required],
    eventDesc: ['', Validators.required],
    email: ['', Validators.required],
    creatorName: ['', Validators.required],
    eventLocation: ['', Validators.required],
    eventStart: ['', Validators.required],
    eventEnd: ['', Validators.required],
  });
  
  this.jobForm = this.jbfb.group({
    jobName: ['', Validators.required],
    jobDesc: ['', Validators.required],
    email: ['', Validators.required],
    creatorName: ['', Validators.required],
    jobLocation: ['', Validators.required],
    phone: ['', Validators.required],
  });
  this._id = this.aRouter.snapshot.paramMap.get('_id');
  // Looks for the Html id="cancel"
  // let ref =  document.getElementById('close');
  // ref?.click();

}


openServPopUp(ServPopUp: any) {
  const modalRef = this.modalService.open(ServPopUp);
  modalRef.componentInstance;
}
public isServsCollapsed = true;

onOpenClear() {
  this.businessCardForm.reset();
  this.eventForm.reset();
  this.jobForm.reset();
}

openEventPopUp(EventPopUp: any) {
  const modalRef = this.modalEvent.open(EventPopUp);
  modalRef.componentInstance;
}
public isEventsCollapsed = true;



openJobsPopUp(JobPopUp: any) {
  const modalRef = this.modalService.open(JobPopUp);
  modalRef.componentInstance;
}
public isJobsCollapsed = true;


//To add... CRUD
createBusinessCard() {
  const BUSINESSCARD: BusinessCardServ = {
    name: this.businessCardForm.get('name')?.value,
    title: this.businessCardForm.get('title')?.value,
    email: this.businessCardForm.get('email')?.value,
    phone: this.businessCardForm.get('phone')?.value,
    website: this.businessCardForm.get('website')?.value,
    bName: this.businessCardForm.get('bName')?.value,
    bServ: this.businessCardForm.get('bServ')?.value,
  } 
  if(this._id !== null){
  console.log("If: Updating Business Card");
  this._businessCardService.updateBusinessCard(this._id, BUSINESSCARD).subscribe((data: any) => {
    this.router.navigate(['/administer']);
  }, error => {
    console.log(error);
    this.businessCardForm.reset();
  })
} else {
  console.log("Else: Creating Business Card");
  this._businessCardService.createBusinessCard(BUSINESSCARD).subscribe((data: any) => {
    this.router.navigate(['/administer']);
  }, error => {
    console.log(error);
    this.businessCardForm.reset();
  })
}
}






createEvent() {
  const EVENTFORM: EventServ = {
    eventName: this.eventForm.get('eventName')?.value,
    eventDesc: this.eventForm.get('eventDesc')?.value,
    email: this.eventForm.get('email')?.value,
    creatorName: this.eventForm.get('creatorName')?.value,
    eventLocation: this.eventForm.get('eventLocation')?.value,
    eventStart: this.eventForm.get('eventStart')?.value,
    eventEnd: this.eventForm.get('eventEnd')?.value,
  }
  console.log(EVENTFORM);
  this._eventService.createEvent(EVENTFORM).subscribe((data: any) => {
  }, error => {
    console.log(error);
    this.eventForm.reset();
    this.router.navigate(['/administer']);
  })
}



createJob() {
  const JOBFORM: JobServ = {
    jobName: this.jobForm.get('jobName')?.value,
    jobDesc: this.jobForm.get('jobDesc')?.value,
    email: this.jobForm.get('email')?.value,
    creatorName: this.jobForm.get('creatorName')?.value,
    jobLocation: this.jobForm.get('jobLocation')?.value,
    phone: this.jobForm.get('phone')?.value,
  }
  console.log(JOBFORM);
  this._jobService.createJob(JOBFORM).subscribe((data: any) => {
  }, error => {
    console.log(error);
    this.jobForm.reset();
    this.router.navigate(['/administer']);
  })
}

  ngOnInit(): void {

    // Business Card
    this.getBusinessCards();
  
    this._subscription = this._businessCardService.refresh$.subscribe(() => {
      this.getBusinessCards();
    });

    
    
    // Event
    this.getEvents();

    this._subscription = this._eventService.refresh$.subscribe(() => {
      this.getEvents();
    });


    // Job
    this.getJobs();

    this._subscription = this._jobService.refresh$.subscribe(() => {
      this.getJobs();
    });
  }

  
  ngOnDestroy(): void{
    this._subscription.unsubscribe();
    console.log("Observable Closed.");
  }


  getBusinessCards() {
    this._businessCardService.getBusinessCards().subscribe((data: any) => {
      console.log(data);
      // getting the data from the database
      this.listBusinesscards = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteBusinessCard(_id: any) {
    this._businessCardService.deleteBusinessCard(_id).subscribe((data: any) => {
      this.getBusinessCards();
      this.router.navigate(['/administer']);
    }, error => {
      console.log(error);
    })
  }



  // To Automatically Fill the business card form with the data
  onEditBusinesscard(businesscard: any) {
    this.businessCardForm.controls['name'].setValue(businesscard.name);
    this.businessCardForm.controls['title'].setValue(businesscard.title);
    this.businessCardForm.controls['email'].setValue(businesscard.email);
    this.businessCardForm.controls['phone'].setValue(businesscard.phone);
    this.businessCardForm.controls['website'].setValue(businesscard.website);
    this.businessCardForm.controls['bName'].setValue(businesscard.bName);
    this.businessCardForm.controls['bServ'].setValue(businesscard.bServ);
    //})
  }


  // To Automatically Fill the event form with the data
  onEditEvent(event: any) {
    this.eventForm.controls['eventName'].setValue(event.eventName);
    this.eventForm.controls['eventDesc'].setValue(event.eventDesc);
    this.eventForm.controls['email'].setValue(event.email);
    this.eventForm.controls['creatorName'].setValue(event.creatorName);
    this.eventForm.controls['eventLocation'].setValue(event.eventLocation);
    this.eventForm.controls['eventStart'].setValue(event.eventStart);
    this.eventForm.controls['eventEnd'].setValue(event.eventEnd);
  }

  // To Automatically Fill the job form with the data
  onEditJob(job: any) {
    this.jobForm.controls['jobName'].setValue(job.jobName);
    this.jobForm.controls['jobDesc'].setValue(job.jobDesc);
    this.jobForm.controls['email'].setValue(job.email);
    this.jobForm.controls['creatorName'].setValue(job.creatorName);
    this.jobForm.controls['jobLocation'].setValue(job.jobLocation);
    this.jobForm.controls['phone'].setValue(job.phone);
  }



  // Get Events
  getEvents() {
    this._eventService.getEvents().subscribe((data: any) => {
      console.log(data);
      this.listEvents = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteEvent(_id: any) {
    this._eventService.deleteEvent(_id).subscribe((data: any) => {
      this.getEvents();
      this.router.navigate(['/administer']);
    }, error => {
      console.log(error);
    })
  }

  
   // Get Jobs
  getJobs() {
    this._jobService.getJobs().subscribe((data: any) => {
      console.log(data);
      this.listJobs = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteJob(_id: any) {
    this._jobService.deleteJob(_id).subscribe((data: any) => {
      this.getJobs();
      this.router.navigate(['/administer']);
    }, error => {
      console.log(error);
    })
  }



}
