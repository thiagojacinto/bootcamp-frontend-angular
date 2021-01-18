import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorCarrinhoComponent } from './contador-carrinho.component';

@NgModule({
  declarations: [ContadorCarrinhoComponent],
  imports: [
    CommonModule
  ],
  exports: [ContadorCarrinhoComponent]
})
export class ContadorCarrinhoModule { }
