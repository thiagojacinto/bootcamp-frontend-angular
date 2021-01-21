import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from 'src/app/produto/Produto.interface';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit {

  itens: Produto[];

  constructor(private storage: LocalStorageService<Produto>) {
    this.itens = [];
  }

  ngOnInit(): void {}

  obterItens() {
    this.itens = this.storage.get("carrinho");
  }
  
  calcularTotal() {
    return this.itens.reduce((total, item) => 
      total += item.precoUnitario
    , 0);
  }

}
