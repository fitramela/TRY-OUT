// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// URL dan Key Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error( "supabase key needed" )
}
// Inisialisasi Supabase Client
export const supabase = createClient(supabaseUrl, supabaseKey);
