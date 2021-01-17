import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFound404Component } from './not-found404/not-found404.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [NotFound404Component, CarrinhoComponent],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
