import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {CategoryListComponent} from "./components/pages/category/category-list/category-list.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProductCategoryListComponent} from "./components/pages/product-category/product-category-list/product-category-list.component";
import {ProductListComponent} from "./components/pages/product/product-list/product-list.component";
import {UserListComponent} from "./components/pages/user/user-list/user-list.component";
import {ProductInputListComponent} from "./components/pages/product-input/product-input-list/product-input-list.component";
import {ProductPhotoManagerComponent} from "./components/pages/product-photo/product-photo-manager/product-photo-manager.component.js";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'categories/list',
    component: CategoryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:product/categories/list',
    component: ProductCategoryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:product/photos/manager',
    component: ProductPhotoManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/list',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inputs/list',
    component: ProductInputListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/list',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
