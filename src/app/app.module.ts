import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BigCarouselComponent } from './home/big-carousel/big-carousel.component';
import { SmallCarouselComponent } from './home/small-carousel/small-carousel.component';
import { AmenitiesComponent } from './home/amenities/amenities.component';
import { DescriptionComponent } from './home/description/description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCarouselComponent,
    SmallCarouselComponent,
    AmenitiesComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
