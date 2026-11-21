
/* =====================================================
   NORTH FITS — SUPABASE PRODUCT IMPORT
   Existing products.js se products import honge.
   Duplicate products dobara import nahi honge.
   ===================================================== */

(async function importNorthFitsProducts() {
  try {
    if (typeof supabaseClient === 'undefined') {
      throw new Error('Supabase client nahi mila.');
    }

    if (typeof NF_PRODUCTS === 'undefined') {
      throw new Error('NF_PRODUCTS nahi mila. products.js load karo.');
    }

    // Admin login check
    const { data: authData, error: authError } =
      await supabaseClient.auth.getUser();

    if (authError) throw authError;

    if (!authData.user) {
      throw new Error('Pehle website par admin login karo.');
    }

    console.log('Admin authenticated:', authData.user.email);

    // Existing products check
    const { data: existing, error: fetchError } =
      await supabaseClient
        .from('products')
        .select('name');

    if (fetchError) throw fetchError;

    const existingNames = new Set(
      (existing || []).map(p => p.name)
    );

    // Product data prepare
    const newProducts = NF_PRODUCTS
      .filter(p => !existingNames.has(p.name))
      .map(p => ({
        name: p.name,
        description: p.desc || null,
        price: p.price,
        category: p.category,
        image_url: p.images?.[0] || null,
        stock: 0,
        is_active: true,
        details: p
      }));

    if (newProducts.length === 0) {
      console.log('All products already imported!');
      return;
    }

    // Insert into Supabase
    const { data, error } = await supabaseClient
      .from('products')
      .insert(newProducts)
      .select('name');

    if (error) throw error;

    console.log('Import successful!');
    console.log('Imported products:', data);

  } catch (error) {
    console.error('Import failed:', error.message);
  }
})();
