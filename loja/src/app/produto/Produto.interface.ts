export interface Produto {
  id?: number,
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
  faqs?: Array<string>
}