import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, zip, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
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

  confirmarCompraTotal(listaProdutos: Produto[], callback: Function) {
    const baseUrl = environment.API + '/v1';
    let itensVendaCriados: Observable<number>[] = [];
    
    listaProdutos.forEach((item) => {
      const produtoID = item.id;
      const quantidade = 1; // TODO: quantidade fixa em 1 unidade.
      
      itensVendaCriados.push(
        this.http
        .post<ItensVenda>(`${baseUrl}/itens`, {
          produtoID,
          quantidade,
        })
        .pipe(map((itemVenda) => itemVenda.id))
        );
      });
      
      const formaPagamentoID = 1; // TODO: forma de pagamento fixa em 1
      const clienteID = 16; // TODO: cliente fixa em 1
      forkJoin(itensVendaCriados).subscribe(
        itensVenda => {
          console.log({ clienteID, formaPagamentoID, items: itensVenda });
          this.http
            .post<Venda>(`${baseUrl}/vendas`, {
              clienteID,
              formaPagamentoID,
              items: itensVenda,
            })
            .subscribe(
              (venda) => {
                console.log(`Venda realizada: ID #${venda.id}`);
                callback();
              },
              (err) => console.error
            );
      },
      (err) => console.error
    );

  }
}
