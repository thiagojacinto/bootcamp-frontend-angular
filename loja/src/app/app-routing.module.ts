import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './paginas/not-found404/not-found404.component';
import { ItemProdutoComponent } from './produto/item-produto/item-produto.component';
import { ListaProdutosComponent } from './produto/lista-produtos/lista-produtos.component';

const routes: Routes = [
  {
    path: "produto/:id",
    component: ItemProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: "produto",
    component: ListaProdutosComponent
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
