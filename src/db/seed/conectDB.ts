import { DadosAPI } from "../../.env";

export async function buscarTodosProdutos() {
  const response = await fetch(
    "https://bttnvspbplfhfmijkvfs.supabase.co/rest/v1/produto",
    {
      method: "GET",
      headers: DadosAPI,
    },
  );

  const data = await response.json();
  return data;
}
