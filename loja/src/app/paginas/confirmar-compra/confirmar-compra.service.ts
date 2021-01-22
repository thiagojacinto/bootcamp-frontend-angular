import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { Produto } from 'src/app/produto/Produto.interface';
import { environment } from 'src/environments/environment';
import { Venda } from '../admin/vendas-admin/vendas.interface';
import { ItensVenda } from './navegacao/itensvenda.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarCompraService {

  constructor(
    private http: HttpClient
  ) { }

  confirmarCompraTotal(listaProdutos: Produto[]) {

    const baseUrl = environment.API + '/v1';
    let itensVendaCriados: Observable<ItensVenda>[] = [];
    let venda$: Observable<Venda> = new Subject<Venda>().asObservable();;

    listaProdutos.forEach(item => {
      const produtoID = item.id;
      const quantidade = 1; // TODO: quantidade fixa em 1 unidade.

      itensVendaCriados.push(this.http.post<ItensVenda>(`${baseUrl}/itens`, {produtoID, quantidade }))
    });

    forkJoin(itensVendaCriados).subscribe(
      (itensVenda) => {
      const clienteID = 16; // TODO: cliente fixo
      const formaPagamentoID = 1; // TODO: forma de pagamento fixa
      const items = itensVenda.map(item => item.id);

      return venda$ = this.http.post<Venda>(`${baseUrl}/vendas`, {clienteID, formaPagamentoID, items})
    }, 
    (err) => {
      console.log('Erro ao criar os itens de venda.');
      console.error(err);
    });

    return venda$;
  }
}
