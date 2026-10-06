if (!window.supabaseClient) {

  const supabaseUrl = "https://vvjhlxqaawxktgtypuro.supabase.co";
  const supabaseKey = "sb_publishable_N_pSnotQSgE8TYs5P3wVHg_i7fYx1my";

  if (!window.supabase) {
    alert("Supabase Script nicht geladen!");
  }

  window.supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
  );
}
