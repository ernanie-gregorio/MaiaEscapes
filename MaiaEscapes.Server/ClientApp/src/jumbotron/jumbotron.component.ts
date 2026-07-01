import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) { }
  images = [
    { src: 'brand template guidelines (10).jpg', alt: 'balcony' },
    { src: 'fb 2 close curtain.jpg', alt: 'bed-and-sunrise' },
    { src: 'fb 9 balcony.jpg', alt: 'living-sofa' },
    { src: 'pxl_20260608_033931553.jpg', alt: 'pool-view' },
    { src: 'study table with me time.jpg', alt: 'slow-conversation' }
  ];

  currentIndex = 0;
  fade = true;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.fade = false;

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.fade = true;
        this.cdr.markForCheck();
      }, 50); // retrigger fade animation
    }, 4000); // 4 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
