// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Ganti dengan URL dan Anon Key dari project Supabase kamu
// Bisa ditemukan di: https://supabase.com/dashboard → Project → Settings → API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
