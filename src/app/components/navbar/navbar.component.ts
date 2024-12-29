import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isActive = false

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick (){
    this.router.navigate(['/login']);
  }

  onUsers(){
    this.router.navigate(['Users']);

  }
  onCircle(){
    this.router.navigate(['circle/Sonam']);
  }
}
