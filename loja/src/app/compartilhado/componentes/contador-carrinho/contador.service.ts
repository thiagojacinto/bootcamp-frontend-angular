import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Produto } from 'src/app/produto/Produto.interface';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  
  private numeroItens: number;
  contadorSubject = new Subject<number>();

  constructor(
    private storage: LocalStorageService<Produto>
  ) {
    this.storage.estaVazio()
      ? this.numeroItens = 0
      : this.numeroItens = this.storage.count("carrinho");
  }

  /**
   * Devolve um <Observable> começando em ZERO ou a quantidade de itens do carrinho.
   */
  getContador() {
    return this.contadorSubject
      .asObservable()
      .pipe(startWith(this.numeroItens));
  }

  /**
   * Incrementa um item ao badge do carrinho
   */
  incrementar() {
    this.log();
    this.contadorSubject.next(++this.numeroItens);
  }

  /**
   * Decrementa um item ao badge do carrinho
   */
  decrementar() {
    this.log();
    this.contadorSubject.next(--this.numeroItens);
  }

  private log() {
    console.log(
      `Valor atual do número de itens no carrinho: ${this.numeroItens}`
    );
  }
}
