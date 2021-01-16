import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produto } from '../Produto.interface';
import { ProdutoService } from '../produto.service';

@Injectable({
  providedIn: 'root'
})
export class CarregarProdutosResolver implements Resolve<Observable<Produto[]>> {
  
  constructor(private produtoService: ProdutoService) {}
  
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<Produto[]> {
    return this.produtoService.obterProdutos();
  }
}
