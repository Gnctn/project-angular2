import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductCategoryComponent } from './product-category/product-category.component';



@NgModule({
  declarations: [MainComponent, ProductCategoryComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
