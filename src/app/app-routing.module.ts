import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProductDetailsComponent } from './user-product-details/user-product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '' , component:} for footer
  { path: 'seller-auth', component: SellerAuthComponent },
  {
    path: 'seller-home', component: SellerHomeComponent,
    // canActivate:[authGuard] 
  },
  { path : 'seller-login', component: SellerLoginComponent },
  { path : 'seller-add-product', component:SellerAddProductComponent},
  { path : 'seller-update-product/:id', component:SellerUpdateProductComponent},
  { path : 'user-auth', component:UserAuthComponent},
  { path : 'user-login', component:UserLoginComponent},
  { path : 'user-home', component: UserHomeComponent},
  { path : 'user-search/:query', component:UserSearchComponent},
  { path : 'user-product-details/:productId',component:UserProductDetailsComponent},
  { path : 'cart-page', component: CartPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
