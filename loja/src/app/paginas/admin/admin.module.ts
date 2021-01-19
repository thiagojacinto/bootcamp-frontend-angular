import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProdutoAdminComponent } from './produto-admin/produto-admin.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/compartilhado/componentes/loading/loading.module';

@NgModule({
  declarations: [HeaderAdminComponent, ProdutoAdminComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    LoadingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
