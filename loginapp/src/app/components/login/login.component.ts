import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MatButtonModule,MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={
    username:"",
    password:""
  }
constructor(private loginService:LoginService){

}
ngOnInit():void{

}
onSubmit(){
  console.log(this.credentials);
  if((this.credentials.username!=''&& this.credentials.password!='')&&(this.credentials.username!=null&&this.credentials.password!=null)){

     this.loginService.generateToken(this.credentials).subscribe({
      next:(response:any)=>{

        console.log(response.token);
        this.loginService.loginUser(response.token);
        window.location.href="/dashboard";
      }
      ,
      error:err=>{
        console.log(err);
      }
    })

    }else{
      console.log("Fields are empty");
    }

}

}
