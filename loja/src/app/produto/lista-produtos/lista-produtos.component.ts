import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Produto.interface';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit, OnChanges {

  produtos!: Produto[]
  linhas!: Produto[][]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService
      .obterProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        this.linhas = this.agruparLinhas(produtos);
      },
      err => console.error)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.produtos) this.linhas = this.agruparLinhas(this.produtos);
  }

  agruparLinhas(itens: Produto[]): Produto[][] {
    const novasLinhas: Produto[][] = [];

    for (let i=0; i < itens.length; i+=3) {
      novasLinhas.push(
        itens.slice(i, i+3)
      );
    }

    return novasLinhas;
  }

}
