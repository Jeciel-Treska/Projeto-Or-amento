import { ClipboardListIcon, Trash2Icon } from "lucide-react";
import type { ProductModel } from "../../models/ProductModel";

type BugdetListProps = {
  itemSelecionado: ProductModel[];
};

export function BugdetList({ itemSelecionado }: BugdetListProps) {
  return (
    <section className="flex min-h-105 min-w-0 flex-col rounded-xl border border-slate-200 bg-white shadow-sm lg:min-h-0">
      <div className="flex items-center justify-between border-b border-slate-100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
            <ClipboardListIcon className="size-5" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-950">
              Lista do orçamento
            </h2>
            <p className="text-xs font-medium text-slate-500">
              Materiais envolvidos
            </p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {itemSelecionado.length} itens
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
        <div className="hidden grid-cols-[1fr_110px_110px_44px] gap-3 border-b border-slate-100 pb-3 text-xs font-bold uppercase text-slate-400 md:grid">
          <span>Material</span>
          <span>Qtd.</span>
          <span>Valor</span>
          <span></span>
        </div>

        <div className="mt-3 flex flex-col gap-2 overflow-y-clip">
          {itemSelecionado.map((material) => (
            <div
              key={material.id}
              className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[1fr_110px_110px_44px] md:items-center"
            >
              <div>
                <p className="font-bold text-slate-900">{material.nome}</p>

                <p className="text-xs font-medium text-slate-500 md:hidden">
                  {material.unidade_medida} - R${material.preco}
                </p>
              </div>

              {/* <p className="hidden text-sm font-semibold text-slate-600 md:block">
                {material.quantidade}
              </p> */}

              <p className="hidden text-sm font-black text-slate-950 md:block">
                R$ {material.preco}
              </p>

              <button className="flex size-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600">
                <Trash2Icon className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
