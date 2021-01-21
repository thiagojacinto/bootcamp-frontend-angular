import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Venda } from './vendas.interface';
import { VendasService } from './vendas.service';

@Component({
  selector: 'app-vendas-admin',
  templateUrl: './vendas-admin.component.html',
  styleUrls: ['./vendas-admin.component.css'],
})
export class VendasAdminComponent implements OnInit, OnChanges {

  vendas: Venda[];

  constructor(private vendaService: VendasService) {
    this.vendas = [];
  }

  ngOnInit(): void {
    this.obterVendas();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  obterVendas() {
    this.vendaService.obterVendas()
      .subscribe(
        (res) => this.vendas = res,
        (err) => console.error(err)  
      );
  }

  obterVendasPorFormaPagamento(formaPagamento: number) {
    if (![1,2,3,4].includes(formaPagamento)) throw new Error('Forma de pagamento inválida. Tente novamente.');

    this.vendaService.vendasPorPagamento(formaPagamento)
      .subscribe(
        (res) => this.vendas = res,
        (err) => console.error(err)  
      );
  }
}
