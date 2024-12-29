import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  constructor(private router : Router) { }
  isActive : boolean = false;



  onClick() {
    this.router.navigate(['/login']);
  }
}
