import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.interface';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-atualizar-fornecedor',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css'],
})
export class AtualizarFornecedorComponent implements OnInit {
  form!: FormGroup;

  @Input('fornecedor') fornecedor!: Fornecedor;

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [this.fornecedor.nome, Validators.required],
      endereco: [this.fornecedor.endereco, Validators.required],
      telefone: [this.fornecedor.telefone, Validators.required],
      cnpj: [this.fornecedor.cnpj, Validators.required],
      email: [this.fornecedor.email, [Validators.required, Validators.email]],
    });
  }

  isValid(): boolean {
    return this.form.valid && !this.form.pending;
  }

  atualizar() {
    const novoFornecedor = this.form.getRawValue() as Fornecedor;
    novoFornecedor.id = this.fornecedor.id;

    this.fornecedorService.atualizarFornecedor(novoFornecedor).subscribe(
      () => {
        console.log(
          `Fornecedor ID = ${novoFornecedor.id} atualizado com sucesso.`
        );
        this.form.reset();
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['admin', 'fornecedores']);
      },
      (err) => console.error(err)
    );
  }

  remover(fornecedorParaRemover: Fornecedor) {
    const id = fornecedorParaRemover.id!;
    this.fornecedorService.removerFornecedor(id)
      .subscribe(
        () => {
          console.log(`Fornecedor ID = ${id} removido.`);
          this.form.reset();
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['admin', 'fornecedores']);
        },
        (err) => console.error(err)
      );
  }
}
