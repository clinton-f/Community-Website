import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/users.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserServ } from '../models/services';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  listUsers: UserServ [] = [];

  _subscription!: Subscription;

  constructor(
    private modalService: NgbModal,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();

    this._subscription = this._userService.refresh$.subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this._userService.getUsers().subscribe((data: any) => {
      console.log(data);
      //this.listUsers = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  openEventPopUp(EventPopUp: any) {
    const modalRef = this.modalService.open(EventPopUp);
    modalRef.componentInstance;
  }

}
