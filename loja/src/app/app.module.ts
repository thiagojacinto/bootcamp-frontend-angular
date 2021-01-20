import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { ProdutoModule } from './produto/produto.module';
import { PaginasModule } from './paginas/paginas.module';
import { LoadingModule } from './compartilhado/componentes/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoadingModule,
    ProdutoModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
