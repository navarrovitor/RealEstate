import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BigCarouselComponent } from './home/big-carousel/big-carousel.component';
import { SmallCarouselComponent } from './home/small-carousel/small-carousel.component';
import { AmenitiesComponent } from './home/amenities/amenities.component';
import { CarouselTextComponent } from './home/big-carousel/carousel-text/carousel-text.component';
import { DescriptionComponent } from './home/description/description.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BigCarouselComponent, SmallCarouselComponent, AmenitiesComponent, CarouselTextComponent, DescriptionComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
