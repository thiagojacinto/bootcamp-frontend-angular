import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProdutoAdminComponent } from './produto-admin/produto-admin.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [HeaderAdminComponent, ProdutoAdminComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
