import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {
  
  constructor() {}

  /**
   * Retorna o dado
   * @param dataKey chave ou identificador do dato guardado
   */
  getJSON(dataKey: string) {
    if (sessionStorage.length === 0) return "";
    return sessionStorage.getItem(dataKey);
  }

  /**
   * Retorna o dado ligado a chave indicada já parseado
   * @param dataKey chave ou identificador do dato guardado
   */
  get(dataKey: string): T[] {
    const res = this.getJSON(dataKey);
    if (res) return JSON.parse(res);
    return JSON.parse("{}");
  }

  /**
   * Realiza a persistencia dos dados no storage.
   * @param dataKey chave ou identificador do dado guardado 
   * @param data valor a ser guardado
   */
  set(dataKey: string, data: string): void {
    sessionStorage.setItem(dataKey, data);
  }

}
