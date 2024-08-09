import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
{
    path:"sendemail",
    component:EmailComponent,
   
}
,
{
    path:"",
    component:HomeComponent,
   
}



   
    
];
