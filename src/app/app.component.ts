import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { InstagramPostComponent } from "./components/instagram-post/instagram-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Ensure both RouterOutlet and NavbarComponent are imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'newApp';
}
