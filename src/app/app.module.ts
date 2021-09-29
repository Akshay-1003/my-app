import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatCardModule} from '@angular/material/card';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgCircleProgressModule.forRoot({
      "radius": 55,
      "space":4,
      // "unitsFontSize": "22",
      // "outerStrokeGradient": true,
      "outerStrokeWidth": 9,
      "outerStrokeColor": "#2756AA",
      // "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#0AE7F8 ",
      "innerStrokeWidth": 7,
      // "title": "UI",
      "titleFontSize":"12",
      "subtitleFontSize": "25",
      "subtitleColor":"#E53787",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true,
      "percent":70,
      "showSubtitle":true,
    }),
    NgbModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
