export async function buscarTodosProdutos() {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/produto`,
    {
      method: "GET",
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
      },
    },
  );

  const data = await response.json();
  return data;
}
