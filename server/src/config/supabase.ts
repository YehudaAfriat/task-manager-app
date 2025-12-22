/* functions and modules */
import { createClient } from '@supabase/supabase-js'; // function from official library to connect Supabase. 
import dotenv from "dotenv" // loading env var
dotenv.config(); // reading from env file

/* env consts */
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

/* error check */
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

/* connection to Supabase */
const supabase = createClient(supabaseUrl, supabaseKey);

/* exprot to use DB */
export default supabase;
