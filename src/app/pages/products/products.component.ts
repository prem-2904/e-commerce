import { Component, Input, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    NgbRatingModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  router = inject(Router);
  productService = inject(ProductsService);
  config = inject(NgbRatingConfig);
  @Input() categoryId!: string;
  products$!: Observable<any>;
  navigateToView() {
    this.router.navigate(['home/view']);
  }
  ngOnInit() {
    this.config.max = 5;
    this.config.readonly = true;
    console.log('categoryid', this.categoryId);
    this.loadProducts();
  }

  loadProducts() {
    if (this.categoryId) {
      const tempCategory = this.categoryId.replace(' ', '%20');
      this.products$ = this.productService.getProductsByCategory(
        this.categoryId
      );

      // this.products$ = this.productService.getProducts();
      //  .subscribe({
      //     next: (prd: any) => {
      //       console.log('prd', prd);
      //     },
      //   });
    }
  }

  gotoProducts(productId: string) {
    this.router.navigate(['home/products', productId]);
  }

  saveWishlist(itemId: number) {}

  addToCart(itemId: number) {}
}
