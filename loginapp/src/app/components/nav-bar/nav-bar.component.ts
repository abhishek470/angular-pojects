import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf,MatToolbarModule, MatButtonModule, MatIconModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public logedIn=false;

  constructor(private loginService:LoginService){

  }
  ngOnInit():void{
    this.logedIn=this.loginService.isLoggedIn();
  }

  logoutUser(){
    this.loginService.logout();
    this.logedIn=false;
  }
}
