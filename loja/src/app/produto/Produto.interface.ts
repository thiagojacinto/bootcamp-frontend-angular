export interface Produto {
  nome: string,
  descricao: string,
  precoUnitario: number,
  categoria?: {
    nome: string,
    ativo?: boolean
  },
  fornecedor?: {
    nome: string,
    cnpj?: string,
    ativo?: boolean
  },
  marca?: {
    nome: string,
  },
  faq?: Array<string>
}