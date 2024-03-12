import { Component, inject } from '@angular/core';
import { MarketSectionComponent } from '../market-section/market-section.component';
import { OverviewProductsComponent } from '../../shared/overview-products/overview-products.component';
import { ProductsService } from '../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { categoriesList } from '../../utils/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarketSectionComponent, OverviewProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private productService = inject(ProductsService);
  categoryList: any;
  destoryRef$ = new Subject();
  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryList = categoriesList;
    // this.productService
    //   .getCategories()
    //   .pipe(takeUntil(this.destoryRef$))
    //   .subscribe({
    //     next: (category: any) => {
    //       this.categoryList = category;
    //     },
    //     error: (err: any) => {},
    //   });
  }
}
