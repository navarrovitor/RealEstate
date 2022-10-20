import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 're-small-carousel',
  templateUrl: './small-carousel.component.html',
  styleUrls: ['./small-carousel.component.css'],
  providers: [ImageService],
})
export class SmallCarouselComponent implements OnInit {
  images: Image[][] = [];

  selectedIndex = 0;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImagesSmall();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
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
