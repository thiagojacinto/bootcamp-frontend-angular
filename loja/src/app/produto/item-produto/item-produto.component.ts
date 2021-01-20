import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContadorService } from 'src/app/compartilhado/componentes/contador-carrinho/contador.service';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from '../Produto.interface';
import { ProdutoService } from '../produto.service';

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
    private storage: LocalStorageService<Produto>,
    private contador: ContadorService,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
    ) { 
    this.favorito = false;
  }

  ngOnInit(): void {
    if (!this.tamanho) this.tamanho = "medium";
    if (!this.produto) this.carregarProdutoPelaRota();
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

  /**
   * Carrega dados do produto através dos parametros da rota.
   */
  carregarProdutoPelaRota() {
    this.activatedRoute.params.subscribe(
      (param) => {
        const { id } = param;
        this.produtoService.obterProdutoPeloId(id)
          .subscribe(
            res => this.produto = res,
            err => console.error(err)
          );
      }
    )
  }

}
