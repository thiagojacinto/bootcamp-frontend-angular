import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Produto } from 'src/app/produto/Produto.interface';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-produto-register',
  templateUrl: './produto-register.component.html',
  styleUrls: ['./produto-register.component.css']
})
export class ProdutoRegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      precoUnitario: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      idMarca: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      idFornecedor: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      idCategoria: ['', [
        Validators.required,
        Validators.min(1)
      ]],
    });
  }

  isValid(): boolean {
    return this.form.valid && this.form.pending;
  }

  cadastrar() {
    const novoProduto = this.form.getRawValue() as Produto;
    this.produtoService.cadastrarProduto(novoProduto)
      .subscribe(() => {
        console.log(`Produto ${novoProduto.nome} cadastrado com sucesso.`);
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['admin', 'produtos']);
      },
      err => console.error(err)
      )
  }
}
