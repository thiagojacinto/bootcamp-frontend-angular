import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProdutoAdminComponent } from './produto-admin/produto-admin.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoadingModule } from 'src/app/compartilhado/componentes/loading/loading.module';
import { ProdutoRegisterComponent } from './produto-admin/produto-register/produto-register.component';
import { NavComponent } from './nav/nav.component';
import { VendasAdminComponent } from './vendas-admin/vendas-admin.component';
import { AtualizarFornecedorComponent } from './fornecedores-admin/atualizar/atualizar.component';
import { FornecedoresAdminComponent } from './fornecedores-admin/fornecedores-admin.component';
import { RegistrarFornecedorComponent } from './fornecedores-admin/registrar/registrar.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    ProdutoAdminComponent,
    AdminComponent,
    ProdutoRegisterComponent,
    NavComponent,
    VendasAdminComponent,
    FornecedoresAdminComponent,
    RegistrarFornecedorComponent,
    AtualizarFornecedorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    LoadingModule,
    ReactiveFormsModule,
  ],
  exports: [AdminComponent],

  bootstrap: [AdminComponent],
})
export class AdminModule {}
