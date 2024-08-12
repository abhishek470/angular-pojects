import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private userService:UserService,private loginService:LoginService){

}
ngOnInit():void{

}
getUser(){
  this.userService.getuser().subscribe({
    next:(res:any)=>{
      console.log(res);
    },
    error:(err:any)=>{
     console.log(err);
    }
  });

}

}
