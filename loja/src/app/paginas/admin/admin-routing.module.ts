import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAdminComponent } from './produto-admin/produto-admin.component';
import { VendasAdminComponent } from './vendas-admin/vendas-admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos'
  },
  {
    path: 'produtos',
    component: ProdutoAdminComponent
  },
  {
    path: 'vendas',
    component: VendasAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }