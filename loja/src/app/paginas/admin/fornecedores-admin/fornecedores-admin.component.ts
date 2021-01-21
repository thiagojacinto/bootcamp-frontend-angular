import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Fornecedor } from './fornecedor.interface';
import { FornecedorService } from './fornecedor.service';

@Component({
  selector: 'app-fornecedores-admin',
  templateUrl: './fornecedores-admin.component.html',
  styleUrls: ['./fornecedores-admin.component.css'],
})
export class FornecedoresAdminComponent implements OnInit {
  fornecedores$!: Observable<Fornecedor[]>;

  atualizar: boolean;
  fornecedorParaAtualizar!: Fornecedor;

  constructor(private fornecedorService: FornecedorService) {
    this.atualizar = false;
  }

  ngOnInit(): void {
    this.obterFornecedores();
  }

  obterFornecedores() {
    this.fornecedores$ = this.fornecedorService.obterFornecedores();
  }

  toggleAtualizar(fornecedor?: Fornecedor) {
    this.atualizar = !this.atualizar;
    if (this.atualizar && fornecedor) this.fornecedorParaAtualizar = fornecedor;
  }

}
