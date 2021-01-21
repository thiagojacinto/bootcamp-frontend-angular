import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fornecedor } from './fornecedor.interface';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  constructor(private http: HttpClient) {}

  /**
   * Obtem lista de fornecedores.
   */
  obterFornecedores() {
    const url = environment.API + '/v1/fornecedores';
    return this.http.get<Fornecedor[]>(url);
  }

  /**
   * Realizar o cadastro de um novo fornecedor
   * @param novoFornecedor Fornecedor a ser cadastrado
   */
  cadastrarFornecedor(novoFornecedor: Fornecedor) {
    const url = environment.API + '/v1/fornecedores';
    return this.http.post(url, novoFornecedor);
  }

  /**
   * Realizar a atualização cadastral de um novo fornecedor
   * @param novosDados Fornecedor a ser cadastrado
   */
  atualizarFornecedor(novosDados: Fornecedor) {
    const url = environment.API + '/v1/fornecedores/' + novosDados.id;
    return this.http.put(url, novosDados);
  }

  /**
   * Remove fornecedor da base de dados.
   * @param id ID do Fornecedor a ser removido.
   */
  removerFornecedor(id: number) {
    const url = environment.API + '/v1/fornecedores/' + id;
    return this.http.delete(url);
  }
}
