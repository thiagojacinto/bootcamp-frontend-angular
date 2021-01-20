import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContadorService } from 'src/app/compartilhado/componentes/contador-carrinho/contador.service';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from 'src/app/produto/Produto.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: [number, Produto][];

  constructor(
    private storage: LocalStorageService<Produto>,
    private contador: ContadorService,
    private router: Router
    ) {
    this.itens = [];
  }

  ngOnInit(): void {
    this.atualizarItens();
  }

  atualizarItens(): void {
    const res = this.storage.get('carrinho');
    if (res) {
      const itensMap = new Map();
      for (let i = 0; i < res.length; i++) {
        itensMap.set(res[i].id, res[i]);
      }
      this.itens = Array.from(itensMap);
    }
  }

  /**
   * Remove um item do carrinho
   * @param item Produto
   */
  removerItem(produto: Produto) {
    
    let lista = this.storage.get('carrinho');
    const size = lista.length;
    lista = lista.filter(item => item.id !== produto.id);
    
    if (lista.length < size) {
      this.storage.set('carrinho', JSON.stringify(lista))
      this.contador.decrementar();
      this.atualizarItens();
    } else throw new Error('Não foi possível remover o item do carrinho.');
  }

  /**
   * Rediciona para página de destaque do produto.
   * @param produto Produto
   */
  visitarProduto(produto: Produto) {
    this.router.navigate(['produto', produto.id]);
  }

}
