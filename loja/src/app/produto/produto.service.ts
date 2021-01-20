import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from './Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  /**
   * Retorna uma lista de produtos
   * @returns Array<Produto>
   */
  obterProdutos() {
    const url = environment.API + '/v1/produtos'
    return this.http.get<Produto[]>(url);
  }

  /**
   * Busca e retorna um produto através de seu ID
   * @param id ID do Produto
   */
  obterProdutoPeloId(id: number) {
    const url = environment.API + '/v1/produtos/' + id;
    return this.http.get<Produto>(url);
  }

  /**
   * Cadastra novo produto
   * @param novo Produto
   */
  cadastrarProduto(novo: Produto) {
    const url = environment.API + '/v1/produtos'
    return this.http.post(url, novo);
  }
}
