import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { TodoComponent } from "./todo/todo.component";
//import { CalcComponent } from "./calc/calc.component";
//import { DetailComponent } from "./detail/detail.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { ProductFormComponent } from "./product-form/product-form.component";


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/form', component: ProductFormComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
