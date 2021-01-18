import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { NotFound404Component } from './paginas/not-found404/not-found404.component';
import { ItemProdutoComponent } from './produto/item-produto/item-produto.component';
import { CarregarProdutosResolver } from './produto/lista-produtos/carregar-produtos.resolver';
import { ListaProdutosComponent } from './produto/lista-produtos/lista-produtos.component';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import('./paginas/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "produto/:id",
    component: ItemProdutoComponent,
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
