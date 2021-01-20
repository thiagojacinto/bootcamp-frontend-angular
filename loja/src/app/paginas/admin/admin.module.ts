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

@NgModule({
  declarations: [HeaderAdminComponent, ProdutoAdminComponent, AdminComponent, ProdutoRegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    LoadingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }