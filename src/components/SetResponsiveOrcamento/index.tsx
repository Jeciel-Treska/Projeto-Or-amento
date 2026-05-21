import { BanknoteIcon } from "lucide-react";
import { CatchInputs } from "../CatchInputs";

export function SetReponsiveOrcamento() {
  return (
    <aside className="flex min-h-0 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
          <BanknoteIcon className="size-5" />
        </div>
        <div>
          <h2 className="text-base font-black text-slate-950">Fechamento</h2>
          <p className="text-xs font-medium text-slate-500">
            Cliente, frete e custos
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
        <CatchInputs
          width="w-full"
          label="Nome do cliente"
          placeholder="Ex: Gabriela Lima"
        />
        <CatchInputs width="w-full" label="Frete" placeholder="R$ 0,00" />
        <CatchInputs
          width="w-full"
          label="Gasto maquinário"
          placeholder="R$ 0,00"
        />
        <CatchInputs width="w-full" label="Desconto" placeholder="R$ 0,00" />
      </div>

      <div className="mt-auto rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <p className="text-xs font-bold uppercase text-emerald-700">
          Valor total
        </p>
        <p className="mt-2 text-3xl font-black text-emerald-950">R$ 0,00</p>
        <p className="mt-1 text-xs font-medium text-emerald-800">
          Total atualizado conforme os materiais e custos informados.
        </p>
      </div>
    </aside>
  );
}
