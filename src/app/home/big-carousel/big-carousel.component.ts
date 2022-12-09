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

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImagesBig();
  }

}
