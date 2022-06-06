import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { PolicyComponent } from './policy/policy.component';
import { AdministerComponent } from './administer/administer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"events",component:EventsComponent},
  {path:"bulletin",component:BulletinComponent},
  {path:"administer",component:AdministerComponent},
  {path:"policy",component:PolicyComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
