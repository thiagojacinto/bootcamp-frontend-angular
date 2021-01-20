export interface Venda {
  id?: number,
  datahora: Date,
  valorTotal: number,
  cliente?: {
    id?: number,
    nome: string,
    cpf: string,
    email?: string
  },
  formaPagamento?: {
    id: number,
    forma: string,
    descricao?: string,
    ativo?: boolean
  },
  items: Array<Object>,
}