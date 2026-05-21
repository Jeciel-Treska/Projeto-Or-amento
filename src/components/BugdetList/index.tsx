import { ClipboardListIcon, Trash2Icon } from "lucide-react";

export function BugdetList() {
  const materials = [
    { name: "MDF Branco 18mm", quantity: "2 chapas", value: "R$ 420,00" },
    { name: "Fita de borda", quantity: "18 m", value: "R$ 54,00" },
    { name: "Parafusos", quantity: "1 caixa", value: "R$ 38,00" },
  ];

  return (
    <section className="flex min-h-[420px] min-w-0 flex-col rounded-xl border border-slate-200 bg-white shadow-sm lg:min-h-0">
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
          {materials.length} itens
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
        <div className="hidden grid-cols-[1fr_110px_110px_44px] gap-3 border-b border-slate-100 pb-3 text-xs font-bold uppercase text-slate-400 md:grid">
          <span>Material</span>
          <span>Qtd.</span>
          <span>Valor</span>
          <span></span>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {materials.map((material) => (
            <div
              key={material.name}
              className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[1fr_110px_110px_44px] md:items-center"
            >
              <div>
                <p className="font-bold text-slate-900">{material.name}</p>
                <p className="text-xs font-medium text-slate-500 md:hidden">
                  {material.quantity} - {material.value}
                </p>
              </div>
              <p className="hidden text-sm font-semibold text-slate-600 md:block">
                {material.quantity}
              </p>
              <p className="hidden text-sm font-black text-slate-950 md:block">
                {material.value}
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
