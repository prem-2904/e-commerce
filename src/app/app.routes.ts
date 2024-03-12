import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ViewProductComponent } from './shared/view-product/view-product.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./pages/login/login.component').then((l) => l.LoginComponent),
  },
  {
    path: 'signup',
    title: 'Create account',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((s) => s.SignupComponent),
  },
  {
    path: 'home',
    title: 'Buy Products',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((l) => l.LayoutComponent),
    children: [
      {
        path: '',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (p) => p.ProductsComponent
          ),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('./shared/view-product/view-product.component').then(
            (v) => v.ViewProductComponent
          ),
      },
    ],
  },
];
