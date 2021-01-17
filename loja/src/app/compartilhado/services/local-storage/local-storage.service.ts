import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {
  
  constructor() {}

  /**
   * Verifica se a storage está vazia.
   */
  estaVazio(): boolean {
    return sessionStorage.length > 0
      ? false
      : true;
  }

  /**
   * Retorna o dado
   * @param dataKey chave ou identificador do dato guardado
   */
  getJSON(dataKey: string) {
    if (this.estaVazio()) return "";
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

  /**
   * Adiciona um novo item a lista
   * @param dataKey chave ou identificador
   * @param novoItem conteúdo do novo item a ser adicionado
   */
  add(dataKey: string, novoItem: T): void {
    let dados: T[] = [];

    if (!this.estaVazio()) {
      if (this.estaDuplicado(dataKey, novoItem)) throw new Error("Item já adicionado ao carrinho.");
      dados = this.get(dataKey);
    }


    dados.push(novoItem);
    this.set(dataKey, JSON.stringify(dados));
  }

  private estaDuplicado(dataKey: string, novoItem: T): boolean {
    const lista = this.get(dataKey);
    const procurado = lista.filter(item => JSON.stringify(item) === JSON.stringify(novoItem));
    if (procurado.length > 0) return true;
    return false;
  }

  /**
   * Retorna a quantidade de itens inseridos.
   * @param dataKey 
   */
  count(dataKey: string): number {
    return this.get(dataKey).length;
  }

}
