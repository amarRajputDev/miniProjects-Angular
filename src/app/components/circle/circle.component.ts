import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstagramPostComponent } from "../instagram-post/instagram-post.component";
// import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css'
})
export class CircleComponent {

  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
