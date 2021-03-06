import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFound404Component } from './not-found404/not-found404.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PaginaPadraoComponent } from './pagina-padrao/pagina-padrao.component';
import { FooterModule } from '../compartilhado/componentes/footer/footer.module';
import { HeaderModule } from '../compartilhado/componentes/header/header.module';
import { InicialComponent } from './inicial/inicial.component';
import { ConfirmarCompraComponent } from './confirmar-compra/confirmar-compra.component';
import { NavegacaoComponent } from './confirmar-compra/navegacao/navegacao.component';

@NgModule({
  declarations: [
    NotFound404Component,
    CarrinhoComponent,
    PaginaPadraoComponent,
    InicialComponent,
    ConfirmarCompraComponent,
    NavegacaoComponent
  ],
  imports: [CommonModule, RouterModule, FooterModule, HeaderModule],
  exports: [PaginaPadraoComponent, NavegacaoComponent],
})
export class PaginasModule {}
