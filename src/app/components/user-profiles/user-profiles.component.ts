import { Component } from '@angular/core';
import { InstagramPostComponent } from "../instagram-post/instagram-post.component";
import { GetUserService } from '../../service/get-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User, UserResponse } from '../../user.model';
import { LottieAnimationComponent } from "../lottie-animation/lottie-animation.component";

@Component({
  selector: 'app-user-profiles',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InstagramPostComponent, LottieAnimationComponent],
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.css'
})
export class UserProfilesComponent {


  Users:User[] = []

  constructor(private http : HttpClient){}

  ngOnInit(){
    this.getUserProfiles()
  }
  
  getUserProfiles(){
    this.http.get('https://dummyjson.com/users').subscribe((data:any)=>{

      this.Users = data.users;
    })}


  }
