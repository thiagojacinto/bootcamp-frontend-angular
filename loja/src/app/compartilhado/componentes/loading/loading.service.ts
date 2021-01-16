import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TipoLoading } from './loading.enum';
import { startWith } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject: Subject<TipoLoading>;

  constructor() {
    this.loadingSubject = new Subject<TipoLoading>();
  }

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(TipoLoading.PARADO))
  }

  start() {
    console.log('Começou carregamento');
    
    this.loadingSubject.next(TipoLoading.CARREGANDO);
  }
  
  stop() {
    console.log('Finalizou carregamento');
    this.loadingSubject.next(TipoLoading.PARADO)
  }
}
