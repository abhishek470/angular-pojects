import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { EmailService } from '../../service/email.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [NgIf, MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,MatSelect,MatOption,MatSnackBarModule,MatProgressSpinnerModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  data={
    to:"",
    subject:"",
    message:""
  }
  flag:boolean=false;
  constructor(private email:EmailService, private snak:MatSnackBar){

  }

  ngOnInit():void{
    console.log("dzffgfd");
  }

  doSubmitForm(){
    console.log("try vto submit form")
    if(this.data.to==''||this.data.subject==''||this.data.message==''){
      this.snak.open("fields can not empty","ok")
      return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe({
      next:res=>{
        this.flag=false;
        console.log(res)
        this.snak.open("Send Successfuly","ok");
      },
      error: err => {
        console.error('Observable emitted an error: ' + err);
        this.flag=false;
        this.snak.open("Error","ok");
      },
    })
  }

}
