import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFound404Component } from './not-found404/not-found404.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PaginaPadraoComponent } from './pagina-padrao/pagina-padrao.component';
import { FooterModule } from '../compartilhado/componentes/footer/footer.module';
import { HeaderModule } from '../compartilhado/componentes/header/header.module';

@NgModule({
  declarations: [NotFound404Component, CarrinhoComponent, PaginaPadraoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FooterModule,
    HeaderModule
  ],
  exports: [PaginaPadraoComponent]
})
export class PaginasModule { }
