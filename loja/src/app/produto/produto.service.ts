import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from './Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  obterProdutos() {
    const url = environment.API + '/v1/produtos'
    return this.http.get<Produto[]>(url);
  }
}