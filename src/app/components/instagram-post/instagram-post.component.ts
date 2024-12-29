import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.css']
})
export class InstagramPostComponent {
  @Input() user! :any; 

  mutuals : number = Math.floor(Math.random() * 20) + 1
}