import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProdutoAdminComponent } from './produto-admin/produto-admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos'
  },
  {
    path: 'produtos',
    component: ProdutoAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }