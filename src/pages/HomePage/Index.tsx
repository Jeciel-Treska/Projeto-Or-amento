import { MenuResponsive } from "../../components/SetMenuReponse";
import { OrcamentoPage } from "../OrcamentoPage";

export function PageHome() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-950">
      <MenuResponsive />
      <OrcamentoPage />
    </div>
  );
}
