import { Component, Input, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss',
})
export class ViewProductComponent {
  @Input({ required: true }) id!: number;

  private readonly productService = inject(ProductsService);
  products: any;
  ngOnInit() {
    console.log('view-product', this.id);
    this.loadProductDetails();
  }

  loadProductDetails() {
    this.productService.getProductById(this.id).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.products = res;
      },
      error: (err: any) => {},
    });
  }
}
