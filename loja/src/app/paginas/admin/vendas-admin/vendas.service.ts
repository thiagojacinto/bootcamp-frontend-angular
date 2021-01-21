import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Venda } from './vendas.interface';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient) { }

  /**
   * Realiza chamada HTTP GET para obter a lista de vendas.
   */
  obterVendas() {
    const url = environment.API + '/v1/vendas';
    return this.http.get<Venda[]>(url);
  }
  
  /**
   * Lista as vendas por forma de pagamento, sendo:
   * 1 - Dinheiro
   * 2 - Crédito
   * 3 - Débito
   * @param formaPagamento number
   */
  vendasPorPagamento(formaPagamento = 1) {
    const url = environment.API + '/v1/vendas?formaPagamentoID=' + formaPagamento;
    return this.http.get<Venda[]>(url);
  }
}
