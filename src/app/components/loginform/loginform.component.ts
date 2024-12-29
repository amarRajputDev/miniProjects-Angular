import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [CommonModule,FormsModule , ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {


   data  = new FormGroup({
    name : new FormControl("" , [Validators.required , Validators.maxLength(3)]),
    password : new FormControl("" , [Validators.required])
   })

   passType = "password"

   onSubmit () {
    console.log(this.data.value)
   }

   togglePass(){
    if (this.passType == "password") {
      this.passType = "text"
    }
    else{
      this.passType = "password"
      console.log("change")
    }
   }
}
