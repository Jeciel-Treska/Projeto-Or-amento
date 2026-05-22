import { buscarTodosProdutos } from "../db/seed/conectDB";

type BuscaProdutoUnicoProps = {
  busca: string;
};

export type Produto = {
  id: number;
  nome: string;
  fornecedor: string;
  preco: string;
  tamanho: string;
  unidade_medida: string;
  tipo: string;
  categoria: string;
  descricao: true;
  ativo: true;
};

export async function BuscaProdutoNome({ busca }: BuscaProdutoUnicoProps) {
  const db: Produto[] = await buscarTodosProdutos();

  const buscaRealizada = db.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
      produto.fornecedor.toLowerCase().includes(busca.toLowerCase()),
  );

  return buscaRealizada;
}
