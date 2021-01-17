import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from 'src/app/produto/Produto.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: [number, Produto][];

  constructor(private storage: LocalStorageService<Produto>) {
    this.itens = [];
  }

  ngOnInit(): void {
    const res = this.storage.get("carrinho");
    if (res) {
      const itensMap = new Map();
      for (let i=0; i < res.length; i++) {
        itensMap.set(res[i].id, res[i]);
      }
      this.itens = Array.from(itensMap);
    }
  }

}
