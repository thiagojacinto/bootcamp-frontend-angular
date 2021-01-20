import { Component, OnInit } from '@angular/core';
import { Venda } from './vendas.interface';
import { VendasService } from './vendas.service';

@Component({
  selector: 'app-vendas-admin',
  templateUrl: './vendas-admin.component.html',
  styleUrls: ['./vendas-admin.component.css'],
})
export class VendasAdminComponent implements OnInit {

  vendas: Venda[];

  constructor(private vendaService: VendasService) {
    this.vendas = [];
  }

  ngOnInit(): void {
    this.obterVendas();
  }

  obterVendas() {
    this.vendaService.obterVendas()
      .subscribe(
        (res) => this.vendas = res,
        (err) => console.error(err)  
      );
  }
}
