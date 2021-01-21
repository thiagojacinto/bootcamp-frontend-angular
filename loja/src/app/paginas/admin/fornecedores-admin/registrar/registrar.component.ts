import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Fornecedor } from '../fornecedor.interface';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-registrar-fornecedor',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarFornecedorComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  isValid(): boolean {
    return this.form.valid && !this.form.pending;
  }

  cadastrar() {
    const novoFornecedor = this.form.getRawValue() as Fornecedor;
    this.fornecedorService.cadastrarFornecedor(novoFornecedor).subscribe(
      () => {
        console.log(
          `Fornecedor ${novoFornecedor.nome} cadastrado com sucesso.`
        );
        this.form.reset();
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['admin', 'fornecedores']);
      },
      (err) => console.error(err)
    );
  }
}
