import { PackageSearchIcon, PlusIcon, SearchIcon } from "lucide-react";
import { BuscaProdutoNome } from "../../utils";
import { useState } from "react";
import type { ProductModel } from "../../models/ProductModel";

type SearchProductProps = {
  produtos: ProductModel[];
  setitemSelecionado: React.Dispatch<React.SetStateAction<ProductModel[]>>;
  setProdutos: React.Dispatch<React.SetStateAction<ProductModel[]>>;
};

export function SearchProduct({
  produtos,
  setProdutos,
  setitemSelecionado,
}: SearchProductProps) {
  const [busca, setBusca] = useState("");

  async function handleBuscarProduto() {
    const resultado = await BuscaProdutoNome({
      busca,
    });

    setProdutos(resultado);
  }

  function handleSelecionaProduto(product: ProductModel) {
    setitemSelecionado((prev) => [...prev, product]);
  }

  const ItemSigularOuPlural = produtos.length > 1 ? "items" : "item";

  return (
    <aside className="flex min-h-0 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
            <PackageSearchIcon className="size-5" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-950">Produtos</h2>
            <p className="text-xs font-medium text-slate-500">
              Base de materiais
            </p>
          </div>
        </div>

        <div className="mt-4 flex h-12 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 focus-within:border-emerald-500 focus-within:bg-white">
          <input
            type="text"
            placeholder="Pesquisar produto"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={() => handleBuscarProduto()}
            className="cursor-pointer p-2 bg-slate-500 rounded-4xl"
          >
            <SearchIcon className="size-5 text-slate-100" />
          </button>
        </div>
      </div>

      <div className="min-h-72 flex-1 rounded-xl border border-slate-100 bg-slate-50 p-3 lg:min-h-0 lg:overflow-auto">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold uppercase text-slate-500">
            Histórico da pesquisa
          </p>
          <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-slate-500">
            {`${produtos.length} ${ItemSigularOuPlural}`}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {produtos.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelecionaProduto(product)}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              <span className="text-sm font-semibold text-slate-700">
                {`${product.nome} - ${product.tamanho} ${product.unidade_medida} - ${product.fornecedor} - R$${product.preco}`}
              </span>
              <PlusIcon className="size-4 text-emerald-700" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
