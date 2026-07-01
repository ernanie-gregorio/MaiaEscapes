import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
  index = 0;
  // Inject MAT_DIALOG_DATA to receive the image source URL
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ImageViewerDialogComponent>,
  ) {
    this.index = data.index;
  }

  get currentImage() {
    return this.data.images[this.index];
  }

  next() {
    if (this.index < this.data.images.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.data.images.length - 1;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
