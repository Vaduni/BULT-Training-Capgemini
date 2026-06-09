import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { CartViewComponent } from './pages/cart-view/cart-view';
import { CheckoutComponent } from './pages/checkout/checkout';
import { OrderHistoryComponent } from './pages/order-history/order-history';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductCatalogComponent
  },

  {
    path: 'products/:id',
    component: ProductDetailsComponent
  },

  {
    path: 'cart',
    component: CartViewComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },

  {
    path: 'orders',
    component: OrderHistoryComponent
  },

  {
    path: 'profile',
    component: CustomerProfileComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '404',
    component: NotFoundComponent
  },

  {
    path: '**',
    redirectTo: '404'
  }

];