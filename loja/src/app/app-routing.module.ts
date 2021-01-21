import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { ConfirmarCompraComponent } from './paginas/confirmar-compra/confirmar-compra.component';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { NotFound404Component } from './paginas/not-found404/not-found404.component';
import { CarregarProdutosResolver } from './produto/lista-produtos/carregar-produtos.resolver';
import { ListaProdutosComponent } from './produto/lista-produtos/lista-produtos.component';
import { ProdutoDetalheComponent } from './produto/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InicialComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./paginas/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "produto/:id",
    component: ProdutoDetalheComponent,
    pathMatch: 'full'
  },
  {
    path: "produto",
    component: ListaProdutosComponent,
    resolve: {
      listaProdutos: CarregarProdutosResolver
    }
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
  },
  {
    path: "confirmar",
    component: ConfirmarCompraComponent
  },
  {
    path: "nao-encontrada",
    component: NotFound404Component
  },
  {
    path: "**",
    redirectTo: "nao-encontrada"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
