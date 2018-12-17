import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoucouComponent } from './coucou/coucou.component';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';
import { MapageComponent } from './pages/mapage/mapage.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CoucouComponent,
    CalcComponent,
    TodoComponent,
    DetailComponent,
    MapageComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
