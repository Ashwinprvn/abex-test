import { supabase } from "@/lib/supabaseClient"; // Import the supabase client
import { sampleMessages } from './sampleMessages'; // Import your data

async function insertMessages() {
  const { data, error } = await supabase
    .from('messages') // Your table name
    .insert(sampleMessages);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}

insertMessages();
