import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-viewer-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './image-viewer-dialog.component.html',
  styleUrls: ['./image-viewer-dialog.component.css'],
})
export class ImageViewerDialogComponent {
  // Inject MAT_DIALOG_DATA to receive the image source URL
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageSrc: string }) {}
}
