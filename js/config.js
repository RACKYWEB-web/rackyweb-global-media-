console.log("CONFIG FILE LOADED");

const SUPABASE_URL = "https://imcwvzdokiclmcrbtlng.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Hf5tOXZv79vFrcVwlIZ1kQ_HXO-5O_v";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Make it global instead of declaring a new constant
window.supabase = window.supabaseClient;