import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-contador-carrinho',
  templateUrl: './contador-carrinho.component.html',
  styleUrls: ['./contador-carrinho.component.css'],
})
export class ContadorCarrinhoComponent implements OnInit {
  quantidadeNoCarrinho$!: Observable<number>;

  constructor(
    private contadorService: ContadorService
  ) {}

  ngOnInit(): void {
    this.quantidadeNoCarrinho$ = this.contadorService.getContador();
  }
}
