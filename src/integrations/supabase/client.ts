// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fossoibkacvvhitsnfhv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvc3NvaWJrYWN2dmhpdHNuZmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1OTMxODEsImV4cCI6MjA0OTE2OTE4MX0.UgiksbLKT8bNsD_fvMldt08ObaW0-chSHWBJbqNqS4E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);