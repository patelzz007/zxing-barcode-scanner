import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// https://github.com/zxing-js/ngx-scanner/issues/267
// https://stackblitz.com/edit/zxing-ngx-scanner?file=projects%2Fzxing-scanner-demo%2Fsrc%2Fapp%2Fapp-ui.module.ts,projects%2Fzxing-scanner-demo%2Fsrc%2Fapp%2Fapp.component.ts
// https://www.npmjs.com/package/@zxing/ngx-scanner
// https://github.com/zxing-js/ngx-scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ZXingScannerModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
