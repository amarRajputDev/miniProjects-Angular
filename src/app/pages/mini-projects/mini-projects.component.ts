import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mini-projects',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './mini-projects.component.html',
  styleUrl: './mini-projects.component.css'
})
export class MiniProjectsComponent {

}
