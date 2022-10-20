import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable()
export class ImageService {
  getImagesBig(): Image[] {
    return [
      {
        src: '../../../assets/images/slide1.jpg',
      },
      {
        src: '../../../assets/images/slide2.jpg',
      },
      {
        src: '../../../assets/images/slide3.jpg',
      },
      {
        src: '../../../assets/images/slide4.jpg',
      },
    ];
  }
  getImagesSmall(): Image[][] {
    return [
      [
        {
          src: '../../../assets/test-images/image (1).jpg',
        },
        {
          src: '../../../assets/test-images/image (2).jpg',
        },
        {
          src: '../../../assets/test-images/image (3).jpg',
        },
      ],
      [
        {
          src: '../../../assets/test-images/image (4).jpg',
        },
        {
          src: '../../../assets/test-images/image (5).jpg',
        },
        {
          src: '../../../assets/test-images/image (6).jpg',
        },
      ],
      [
        {
          src: '../../../assets/test-images/image (7).jpg',
        },
        {
          src: '../../../assets/images/slide1.jpg',
        },
        {
          src: '../../../assets/images/slide2.jpg',
        },
      ],
    ];
  }
}
