import { Injectable } from '@angular/core';
import { Image } from './carousel-image';

@Injectable()
export class ImageService {
  getImages(): Image[] {
    return [
      {
        src: '../../../assets/big-carousel/slide1.jpg',
        alt: 'image 1',
      },
      {
        src: '../../../assets/big-carousel/slide2.jpg',
        alt: 'image 2',
      },
      {
        src: '../../../assets/big-carousel/slide3.jpg',
        alt: 'image 3',
      },
      {
        src: '../../../assets/big-carousel/slide4.jpg',
        alt: 'image 4',
      },
    ];
  }
}
