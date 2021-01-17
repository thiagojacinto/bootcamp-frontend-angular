import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { ProdutoModule } from './produto/produto.module';
import { HeaderModule } from './compartilhado/componentes/header/header.module';
import { FooterModule } from './compartilhado/componentes/footer/footer.module';
import { PaginasModule } from './paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ProdutoModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
