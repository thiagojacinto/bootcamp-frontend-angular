import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from 'src/app/compartilhado/componentes/contador-carrinho/contador.service';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from '../Produto.interface';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.css']
})
export class ItemProdutoComponent implements OnInit {

  @Input("tamanho") tamanho?: string;

  @Input() produto!: Produto

  favorito: boolean;

  constructor(
    private router: Router,
    private storage: LocalStorageService<Produto>,
    private contador: ContadorService
    ) { 
    this.favorito = false;
  }

  ngOnInit(): void {
    if (!this.tamanho) this.tamanho = "medium";
  }

  /**
   * Troca o valor do boolean Favorito
   */
  toggleFavorito(): void {
    this.favorito = !this.favorito;
  }

  /**
   * Adicionar produto ao carrinho
   * @param produto Produto
   */
  adicionarAoCarrinho(produto: Produto) {
    this.storage.add("carrinho", produto);
    this.contador.incrementar();
  }

  goToCarrinho(): void {
    this.router.navigate(['carrinho']);
  }

}
