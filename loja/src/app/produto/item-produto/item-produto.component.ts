import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { 
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

}
