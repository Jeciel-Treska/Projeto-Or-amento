import { FileDownIcon, ScrollIcon } from "lucide-react";
import { SearchProduct } from "../../components/SearchProduct";
import { BugdetList } from "../../components/BugdetList";
import { SetReponsiveOrcamento } from "../../components/SetResponsiveOrcamento";
import { buscarTodosProdutos } from "../../db/seed/conectDB";
import { useState } from "react";
import type { Produto } from "../../utils";

export function OrcamentoPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [itemSelecionado, setitemSelecionado] = useState<Produto[]>([]);

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:px-6 lg:h-[calc(100vh-72px)] lg:gap-5 lg:overflow-hidden lg:px-8">
      <section className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase text-emerald-700">
          Novo orçamento
        </p>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h1 className="text-2xl font-black text-slate-950 md:text-3xl">
              Montagem de orçamento
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Pesquise produtos, confira os materiais envolvidos e informe os
              custos extras antes de fechar.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
              <FileDownIcon className="size-4" />
              PDF
            </button>
            <button
              onClick={() => buscarTodosProdutos()}
              className="flex h-11 items-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <ScrollIcon className="size-4" />
              Fechar orçamento
            </button>
          </div>
        </div>
      </section>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-5">
        <div className="flex min-h-0 flex-col gap-4">
          <div>
            <SearchProduct
              produtos={produtos}
              setProdutos={setProdutos}
              setitemSelecionado={setitemSelecionado}
            />
          </div>
          <BugdetList itemSelecionado={itemSelecionado} />
        </div>

        <SetReponsiveOrcamento />
      </div>
    </main>
  );
}
