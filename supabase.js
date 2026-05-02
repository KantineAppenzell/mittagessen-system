if (!window.supabaseClient) {
  const supabaseUrl = "https://gzhapafmlnefhnrpehiz.supabase.co";
  const supabaseKey = "sb_publishable_9s7jzuXbv4UrHBp-Yl6FHQ_04AFb07H";

  window.supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
  );
}
