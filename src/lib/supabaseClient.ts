import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mhaxsfwzuuvubvurhbxs.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYXhzZnd6dXV2dWJ2dXJoYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODA1MjksImV4cCI6MjA0OTY1NjUyOX0.MoDrcLCkFeorKiLFbKc-X5DlnsrWBrP07E8HW-S9HLQ'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

