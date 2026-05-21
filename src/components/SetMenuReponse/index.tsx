import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function MenuResponsive() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 h-18 border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur md:px-8">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-600 text-lg font-black text-white">
              J
            </div>
            <div>
              <p className="text-base font-bold leading-tight text-slate-950">
                Orçamento
              </p>
              <p className="text-xs font-medium text-slate-500">
                Materiais e custos
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            <a
              href=""
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Cadastro de produto
            </a>
            <a
              href=""
              className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Orçamento
            </a>
            <a
              href=""
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Buscar orçamento
            </a>
          </nav>

          <button
            className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="absolute z-30 w-full overflow-hidden py-4 transition-all duration-500 md:hidden">
          <nav className="mx-3 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
            <ul className="flex flex-col gap-2">
              <a
                href=""
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cadastro de produto
              </a>
              <a
                href=""
                className="rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Orçamento
              </a>
              <a
                href=""
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Buscar orçamento
              </a>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
