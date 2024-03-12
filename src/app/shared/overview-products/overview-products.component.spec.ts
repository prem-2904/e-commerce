import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProductsComponent } from './overview-products.component';

describe('OverviewProductsComponent', () => {
  let component: OverviewProductsComponent;
  let fixture: ComponentFixture<OverviewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
