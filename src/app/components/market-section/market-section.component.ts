import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-market-section',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './market-section.component.html',
  styleUrl: './market-section.component.scss',
})
export class MarketSectionComponent {
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  destroy$: Subject<boolean> = new Subject<boolean>();
  carosuelData = [
    {
      image: 'https://picsum.photos/id/700/900/500',
      header: '',
      caption: '',
      id: '1',
    },
    {
      image: 'https://picsum.photos/id/533/900/500',
      header: '',
      caption: '',
      id: '2',
    },
    {
      image: 'https://picsum.photos/id/807/900/500',
      header: '',
      caption: '',
      id: '3',
    },
    {
      image: 'https://picsum.photos/id/124/900/500',
      header: '',
      caption: '',
      id: '4',
    },
    {
      image: 'https://picsum.photos/id/700/900/500',
      header: '',
      caption: '',
      id: '5',
    },
    {
      image: 'https://picsum.photos/id/700/900/500',
      header: '',
      caption: '',
      id: '6',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
