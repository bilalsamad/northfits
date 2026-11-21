
const SUPABASE_URL = "https://rasdpgctgrhsfcvwymus.supabase.co";
const SUPABASE_KEY = "sb_publishable_cLa86jQTbvu_gUXFtJSy1w_a7oJHRQv";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
async function testSupabaseConnection() {
  const { data, error } = await supabaseClient
    .from('products')
    .select('id, name')
    .limit(5);

  if (error) {
    console.error('Supabase Error:', error.message);
  } else {
    console.log('Supabase Connected Successfully!', data);
  }
}

testSupabaseConnection();
