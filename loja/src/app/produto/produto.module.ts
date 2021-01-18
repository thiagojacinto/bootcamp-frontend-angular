import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ItemProdutoComponent } from './item-produto/item-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { PaginasModule } from '../paginas/paginas.module';

@NgModule({
  declarations: [
    ItemProdutoComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginasModule
  ],
  exports: [
    ItemProdutoComponent,
    ListaProdutosComponent
  ]
})
export class ProdutoModule { }
