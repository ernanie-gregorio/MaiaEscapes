import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerDialogComponent } from '../image-viewer.component/image-viewer-dialog.component';
import { HouseRulesComponent } from '../house-rules/house-rules.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit {
  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService,
  ) {}
  openViewer(index: number) {
    this.dialog.open(ImageViewerDialogComponent, {
      data: {
        images: this.galleryImages,
        index,
      },
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'fullscreen-dialog',
    });
  }

  ngOnInit() {
    // let cookieValue = this.cookieService.get('house-rules-seen');
    // if (cookieValue == '') {
    //   this.showHouseRules();
    // }
  }

  showHouseRules() {
    // this.dialog.open(HouseRulesComponent, {
    //   maxWidth: '90vw',
    //   maxHeight: '90vh',
    // });
  }

  openPlatform(platform: 'facebook' | 'airbnb' | 'booking'): void {
    const urls: Record<string, string> = {
      facebook: 'https://www.facebook.com/Maiaescapes',
      airbnb: 'https://www.airbnb.com/rooms/1676698721026894470',
      booking:
        'https://www.booking.com/hotel/ph/amaia-steps-san-jose-del-monte-bulacan-staycation-maia-escapes-by-ai.html',
    };

    const url = urls[platform];
    if (url) {
      window.open(url, '_blank');
    }
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll(
      'section, mat-card, img, .feature, .hero-text, .hero-image, .gallery-item, .review-card, .booking-card',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');

            // Add stagger class if inside a grid
            const parent = entry.target.parentElement;
            if (parent && parent.children.length > 1) {
              entry.target.classList.add('animate-stagger');
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
  }

  galleryImages = [
    { src: '/thumbnail/balcony.jpg', alt: 'balcony' },
    { src: '/thumbnail/bed focus.jpg', alt: 'bed focus' },
    { src: '/thumbnail/bed sofa.jpg', alt: 'bed sofa' },
    { src: '/thumbnail/bed sofa bed.jpg', alt: 'bed sofa bed' },
    { src: '/thumbnail/bed tv sofa bed.jpg', alt: 'bed tv sofa bed' },
    { src: '/thumbnail/brand template guidelines (10).jpg', alt: 'brand template guidelines (10)' },
    { src: '/thumbnail/brand template guidelines (12).jpg', alt: 'brand template guidelines (12)' },
    { src: '/thumbnail/brand template guidelines (13).jpg', alt: 'brand template guidelines (13)' },
    { src: '/thumbnail/brand template guidelines (14).jpg', alt: 'brand template guidelines (14)' },
    { src: '/thumbnail/convertible sofa.jpg', alt: 'convertible sofa' },
    { src: '/thumbnail/emergency kit.jpg', alt: 'emergency kit' },
    { src: '/thumbnail/fb 2 close curtain.jpg', alt: 'fb 2 close curtain' },
    { src: '/thumbnail/fb 7 pool view.jpg', alt: 'fb 7 pool view' },
    { src: '/thumbnail/fb 9 balcony.jpg', alt: 'fb 9 balcony' },
    { src: '/thumbnail/fb 10 cr.jpg', alt: 'fb 10 cr' },
    { src: '/thumbnail/fb 11 cr sink.jpg', alt: 'fb 11 cr sink' },
    { src: '/thumbnail/kettle microwave.jpg', alt: 'kettle microwave' },
    { src: '/thumbnail/pxl_20260527_114424211.jpg', alt: 'pxl_20260527_114424211' },
    { src: '/thumbnail/pxl_20260608_033931553.jpg', alt: 'pxl_20260608_033931553' },
    {
      src: '/thumbnail/pxl_20260608_034020394.portrait.jpg',
      alt: 'pxl_20260608_034020394.portrait',
    },
    { src: '/thumbnail/shoe stool.jpg', alt: 'shoe stool' },
    { src: '/thumbnail/shower.jpg', alt: 'shower' },
    { src: '/thumbnail/study table with me time.jpg', alt: 'study table with me time' },
    { src: '/thumbnail/switch panels.jpg', alt: 'switch panels' },
    { src: '/thumbnail/template always duplicate (1).jpg', alt: 'template always duplicate (1)' },
    { src: '/thumbnail/template always duplicate (2).jpg', alt: 'template always duplicate (2)' },
    { src: '/thumbnail/template always duplicate (4).jpg', alt: 'template always duplicate (4)' },
    { src: '/thumbnail/tv bed.jpg', alt: 'tv bed' },
    { src: '/thumbnail/tv.jpg', alt: 'tv' },
    { src: '/thumbnail/wellness corner.jpg', alt: 'wellness corner' },
    { src: '/thumbnail/whole body mnirror.jpg', alt: 'whole body mnirror' },
  ];

  faqs = [
    {
      question: 'What are the check-in and check-out times?',
      answer:
        'You can choose: 2:00 PM–10:00 AM or 5:00 PM–12:00 NN. Check-out time is strict to allow cleaning for the next guest.',
    },
    {
      question: 'How many guests can stay?',
      answer:
        'The space is recommended for up to 3 guests, including infants and toddlers, for a comfortable stay.',
    },
    {
      question: 'Is there pool access?',
      answer:
        'Yes, guests may access the pool. Separate pool fees apply as per building management.',
    },
    {
      question: 'Is parking available?',
      answer:
        'Parking may be available within the property or nearby. Fees may apply depending on availability and building rules.',
    },
    {
      question: 'Can we cook?',
      answer:
        'Heavy cooking is not allowed. No stove or rice cooker. Only light meal preparation is allowed due to sensitive smoke detectors.',
    },
    {
      question: 'How do I confirm my booking?',
      answer:
        'For direct bookings, full payment and a *₱1,000 refundable security deposit* are required to secure your stay. The security deposit will be refunded within *48 hours after checkout*, subject to unit inspection. ' +
        'For bookings made through Airbnb or Booking.com, no security deposit is required.Please note that platform bookings are subject to their respective cancellation policies.',
    },
  ];

  reviews = [
    {
      name: 'Guest Review',
      text: '“The balcony was my favorite spot. It felt like a pause button from everyday life.”',
    },
    {
      name: 'Guest Review',
      text: '“Beautiful, quiet, and thoughtfully designed. Perfect for a reset weekend.”',
    },
  ];

  features = [
    { icon: 'bed', label: 'Sleeps up to 3 guests' },
    { icon: 'wifi', label: 'Fast WiFi' },
    { icon: 'ac_unit', label: 'Air-conditioned' },
    { icon: 'tv', label: 'Smart TV with Netflix' },
    { icon: 'restaurant', label: 'Kitchen essentials' },
    { icon: 'balcony', label: 'Cozy balcony' },
    { icon: 'chair', label: 'Workspace-friendly' },
    { icon: 'pool', label: 'Pool access (fees apply)' },
    { icon: 'key', label: 'Self check-in' },
  ];
}
