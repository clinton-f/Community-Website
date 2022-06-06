import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
// For Validation and Registration
import { CMSServ, UserServ } from '../models/services';

// For Backend API
import { UserService } from '../services/users.service';
import { Subscription } from 'rxjs';
import { CMSService } from '../services/cms.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  searchTextUser: any;
  listUsers: UserServ [] = [];
  listCMS: CMSServ [] = [];
  _subscription!: Subscription;

  userForm: FormGroup;
  cmsForm: FormGroup;

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];


  constructor(
    private modalService: NgbModal, 
    private userfb: FormBuilder,
    private _userService: UserService,
    private _CMSService: CMSService,

    private router: Router
    ) {
      //Form Validation
    this.userForm = this.userfb.group({
        //_id: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required],
     });

     this.cmsForm = this.userfb.group({
      //_id: ['', Validators.required],
      intro: ['', ""],
      sitedesc: ['', ""],
      imgdesc: ['', ""],
      //imgurl: ['', ""],
     });
  }

//   createUser() {
//     const USERFORM: UserServ = {
//       //_id: this.userForm.get('_id')?.value,
//       name: this.userForm.get('name')?.value,
//       email: this.userForm.get('email')?.value,
//       address: this.userForm.get('address')?.value,
//       phone: this.userForm.get('phone')?.value,
//       password: this.userForm.get('password')?.value,
//   }
//   console.log(USERFORM);
//   this._userService.createUser(USERFORM).subscribe((data: any) => {
//   }, (error: any) => {
//     console.log(error);
//     this.userForm.reset();
//     this.router.navigate(['/dashboard']);
//   });
// }

  onEditUser(user: any) {
    this._userService.getUser(user._id).subscribe((data: any) => {
      this.userForm.controls['name'].setValue(user.name);
      this.userForm.controls['email'].setValue(user.email);
      this.userForm.controls['address'].setValue(user.address);
      this.userForm.controls['phone'].setValue(user.phone);
  })}

  // onEditCMS(cms: any) {
  //   this._CMSService.getCMS(cms._id).subscribe((data: any) => {
  //     this.userForm.controls['intro'].setValue(cms.intro);
  //     this.userForm.controls['sitedesc'].setValue(cms.sitedesc);
  // })}

  ngOnInit(): void {

    this.getUsers();

    
    this._subscription = this._userService.refresh$.subscribe(() => {
      this.getUsers();
    });

    this.updateUser();

    this.getCMS();
    
    this._subscription = this._CMSService.refresh$.subscribe(() => {
      this.getCMS();
    })

    this.updateCMS();
  }

  ngOnDestroy(): void{
    this._subscription.unsubscribe();
    console.log("Observable Closed.");
  }

  getUsers() {
    this._userService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.listUsers = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteUser(_id: any) {
    this._userService.deleteUser(_id).subscribe((data: any) => {
      this.getUsers();
      this.userForm.reset();
    }, (error: any) => {
      console.log(error);
    })
  }

  updateUser() {
  //   const USERFORM: UserServ = {
  //     //_id: this.userForm.get('_id')?.value,
  //     name: this.userForm.get('name')?.value,
  //     email: this.userForm.get('email')?.value,
  //     address: this.userForm.get('address')?.value,
  //     phone: this.userForm.get('phone')?.value,
  //     password: this.userForm.get('password')?.value,
  // }
  // console.log(USERFORM);
  // this._userService.updateUser(USERFORM).subscribe((data: any) => {
  // }, (error: any) => {
  //   console.log(error);
  //   this.userForm.reset();
  //   this.router.navigate(['/dashboard']);
  // });
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
  
updateCMS(){
  //(keydown.enter)="updateCMS()"
}

  

  openUserPopUp(UserPopUp: any) {
    const modalRef = this.modalService.open(UserPopUp);
    modalRef.componentInstance;
  }

  public isServCollapsed = true;

  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }

  active = 1;

}
