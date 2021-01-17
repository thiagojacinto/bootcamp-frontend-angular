import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from 'src/app/produto/Produto.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: Produto[];

  constructor(private storage: LocalStorageService<Produto>) {
    this.itens = [];
  }

  ngOnInit(): void {
    const res = this.storage.get("carrinho");
    if (res) this.itens = res;
  }

}
