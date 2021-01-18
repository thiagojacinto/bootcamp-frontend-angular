import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';
import { ContadorCarrinhoModule } from '../contador-carrinho/contador-carrinho.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ContadorCarrinhoModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
