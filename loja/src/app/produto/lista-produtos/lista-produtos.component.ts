import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../Produto.interface';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit, OnChanges {

  produtos!: Produto[]
  linhas!: Produto[][]

  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      () => {
        console.log('Acessou rota produtos e carregou');
        this.produtos = this.activatedRoute.snapshot.data['listaProdutos'];
        this.linhas = this.agruparLinhas(this.produtos);
      },
      err => console.error(err)
    );
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
