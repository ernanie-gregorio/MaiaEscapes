import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-house-rules',
  templateUrl: './house-rules.component.html',
  styleUrls: ['./house-rules.component.css'],
})
export class HouseRulesComponent {
  constructor(
    private dialogRef: MatDialogRef<HouseRulesComponent>,
    private cookieService: CookieService,
  ) {}
  @Output() closed = new EventEmitter<void>();

  agreeAndClose() {
    // window.open('https://canva.link/wun2zt4k4c4fmjl', '_blank');
    let cookieValue = this.cookieService.get('house-rules-seen');
    if (cookieValue == '') {
      this.cookieService.set('house-rules-seen', '1');
    }
    this.dialogRef.close();
  }
}
