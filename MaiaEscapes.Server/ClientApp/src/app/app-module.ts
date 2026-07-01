import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNgHttpCaching } from 'ng-http-caching';

import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing-module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { App } from './app';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { HouseRulesComponent } from '../house-rules/house-rules.component';
import { ngrokInterceptor } from '../core/ngrok-interceptor';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    JumbotronComponent,
    HouseRulesComponent,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([ngrokInterceptor])),
    provideNgHttpCaching({
      lifetime: 60000, // Cache expiration time in milliseconds (1 minute)
      allowedMethod: ['GET'], // HTTP methods allowed to cache
    }),
    CookieService,
  ],
  bootstrap: [App],
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.iconRegistry.addSvgIcon(
      'airbnb',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/airbnb.svg'),
    );
  }
}
