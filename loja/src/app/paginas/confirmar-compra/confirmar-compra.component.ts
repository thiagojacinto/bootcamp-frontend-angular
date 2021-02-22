import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from 'src/app/compartilhado/componentes/contador-carrinho/contador.service';
import { LocalStorageService } from 'src/app/compartilhado/services/local-storage/local-storage.service';
import { Produto } from 'src/app/produto/Produto.interface';
import { ConfirmarCompraService } from './confirmar-compra.service';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css'],
})
export class ConfirmarCompraComponent implements OnInit {
  itens: Produto[];

  precoTotal!: number;

  icones = [
    'adb',
    'alarm',
    'android',
    'assignment_ind',
    'audiotrack',
    'cake',
    'camera_alt',
    'child_friendly',
  ];

  constructor(
    private storage: LocalStorageService<Produto>,
    private contadorCarrinho: ContadorService,
    private service: ConfirmarCompraService,
    private roteador: Router
  ) {
    this.itens = [];
  }

  ngOnInit(): void {
    this.obterItens();
    this.calcularTotal();
  }

  removerItem(produto: Produto) {
    let lista = this.storage.get('carrinho');
    const size = lista.length;
    lista = lista.filter((item) => item.id !== produto.id);

    if (lista.length < size) {
      this.storage.set('carrinho', JSON.stringify(lista));
      this.contadorCarrinho.decrementar();
      this.obterItens();
      this.calcularTotal();
    } else throw new Error('Não foi possível remover o item do carrinho.');
  }

  obterItens() {
    this.itens = this.storage.get('carrinho');
  }

  calcularTotal() {
    this.precoTotal = this.itens.reduce(
      (total, item) => (total += item.precoUnitario),
      0
    );
  }

  getIcone(numero: number) {
    return this.icones[numero];
  }

  limparCarrinho() {
    this.storage.clear("carrinho");
  }

  confirmar() {
    const redireciona = () => this.roteador.navigate(['produto']);
    const limpar = () => this.limparCarrinho();
    
    const aposConfirmar = () => {
      redireciona();
      limpar();
    }
    this.service.confirmarCompraTotal(this.itens, aposConfirmar);
    // .subscribe(
    //   (res) => console.log(`Compra registrada com ID = ${res.id}`),
    //   (err) => console.error(err)
    // );
  }
}
