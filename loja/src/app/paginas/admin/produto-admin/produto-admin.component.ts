import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/Produto.interface';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-produto-admin',
  templateUrl: './produto-admin.component.html',
  styleUrls: ['./produto-admin.component.css']
})
export class ProdutoAdminComponent implements OnInit {

  produtos!: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(res => this.produtos = res);
  }

}
