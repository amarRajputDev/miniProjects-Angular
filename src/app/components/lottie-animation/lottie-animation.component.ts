import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-lottie',
  standalone: true,
  template: `<div #lottieContainer style="width: 300px; height: 300px;"></div>`,
})
export class LottieAnimationComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement, // Target the container
      path: '/loader.json', // Path to your Lottie JSON file
      renderer: 'svg', // Render as SVG
      loop: true, // Enable looping
      autoplay: true, // Start animation automatically
    });

    const container = this.lottieContainer.nativeElement;
    container.style.width = '600px'; // Adjust width
    container.style.height = '600px'; // Adjust height
  }
}
