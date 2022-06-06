import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

ngOnInit(){

const hamburger: any = document.querySelector('.hamburger');
const navMenu: any = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));
};

openLI(content1: any) {
  const modalRef = this.modalService.open(content1);
  modalRef.componentInstance;
}
openLO(content2: any) {
  const modalRef = this.modalService.open(content2);
  modalRef.componentInstance;
}
openR(content3: any) {
  const modalRef = this.modalService.open(content3);
  modalRef.componentInstance;
}

toHero(){
  document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'});
}


};
