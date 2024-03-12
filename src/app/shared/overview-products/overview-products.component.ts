import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-overview-products',
  standalone: true,
  imports: [SlickCarouselModule, MatIconModule, MatButtonModule],
  templateUrl: './overview-products.component.html',
  styleUrl: './overview-products.component.scss',
})
export class OverviewProductsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) contents!: any;
  @Input() isDrag!: Boolean;

  router = inject(Router);

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = { slidesToShow: 6, slidesToScroll: 4 };

  ngOnInit() {
    console.log(this.contents, 'contents');
  }

  viewProducts(category: string) {
    console.log('view-products', category);
    this.router.navigate(['home/products'], {
      queryParams: { categoryId: category },
    });
  }
}
