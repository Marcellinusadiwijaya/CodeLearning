// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Ganti dengan URL dan Anon Key dari project Supabase kamu
// Bisa ditemukan di: https://supabase.com/dashboard → Project → Settings → API
const SUPABASE_URL = "https://txxzhxejewvrgdscgngk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eHpoeGVqZXd2cmdkc2NnbmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMzMxMTMsImV4cCI6MjA5NDkwOTExM30.IMKauvepRbLbctMxYuWriB4uVRIIXC6EZLosPa4GNo4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
