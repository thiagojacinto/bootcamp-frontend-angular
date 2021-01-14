import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemProdutoComponent } from './item-produto/item-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    ItemProdutoComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
