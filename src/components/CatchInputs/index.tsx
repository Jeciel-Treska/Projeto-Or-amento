import type { ReactNode } from "react";

type CatchInputsProps = {
  label: string;
  width: string;
  placeholder?: string;
  children?: ReactNode;
};

export function CatchInputs({
  label,
  width,
  placeholder = "Informar valor",
  children,
}: CatchInputsProps) {
  return (
    <div
      className={`${width} flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm`}
    >
      <label className="text-xs font-bold uppercase text-slate-500">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white"
      />
      {children}
    </div>
  );
}
