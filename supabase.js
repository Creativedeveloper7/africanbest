
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
// Replace these with your actual Supabase credentials
c

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Define the fetchProducts function first, then export it
const fetchProducts = async () => {
    try {
        const { data, error } = await supabase
            .from('Products')
            .select('*');

        if (error) {
            console.error('Error fetching products:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

// Export both the function and the supabase client
export { fetchProducts, supabase };