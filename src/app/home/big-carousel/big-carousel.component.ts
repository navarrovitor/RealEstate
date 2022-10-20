import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 're-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css'],
  providers: [ImageService],
})
export class BigCarouselComponent implements OnInit {
  images: Image[] = [];

  selectedIndex = 0;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImagesBig();
    this.autoChangeImage();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  autoChangeImage(): void {
    setInterval(() => {
      this.onNextClick();
    }, 5000);
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
