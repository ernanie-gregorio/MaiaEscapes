import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerDialogComponent } from '../image-viewer.component/image-viewer-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  constructor(private dialog: MatDialog) {}
  openViewer(src: string) {
    this.dialog.open(ImageViewerDialogComponent, {
      data: { imageSrc: src },
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container', // Optional hook for global styling
    });
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
        'Full payment and a ₱1,000 security deposit are required to confirm your stay. The deposit is refundable within 24 hours after checkout.',
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
