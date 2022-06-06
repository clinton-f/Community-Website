import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CMSServ } from '../models/services';
import { CMSService } from '../services/cms.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listCMS: CMSServ [] = [];
  _subscription!: Subscription;
  donateForm: FormGroup;

  constructor(
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private _CMSService: CMSService,
    ) { 
    
    this.donateForm = this.fb.group({
      email: ['', Validators.required],
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expDate: ['', Validators.required],
      cvc: ['', Validators.required],
      billingAddress: ['', Validators.required],
      zip: ['', Validators.required],
      state: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
    this.getCMS();
    
    this._subscription = this._CMSService.refresh$.subscribe(() => {
      this.getCMS();
    })
  }
  getCMS() {
    this._CMSService.getCMS().subscribe((data: any) => {
      console.log(data);
      this.listCMS = data;
    }
    , (error: any) => {
      console.log(error);
    })
}
  openDonateBtn(DonateBtn: any) {
    const modalRef = this.modalService.open(DonateBtn);
    modalRef.componentInstance;
  }

  donateFunds() {
    console.log(this.donateForm);
  }


}
