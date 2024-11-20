// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'https://uknpeqdlfqmxilnmzbnn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbnBlcWRsZnFteGlsbm16Ym5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjAyMTYsImV4cCI6MjA0NzU5NjIxNn0.Ac3mCSZ6DgadgSHvXkwkDB8H3V8EJzYKZC-TGzlHI60';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add an email to the Email table
async function addEmail(email) {
  const { data, error } = await supabase
    .from('Email') // Specify the table name
    .insert([{ Email: email }]); // Insert a new row

  if (error) {
    console.error('Error inserting email:', error.message);
  } else {
    console.log('Email added successfully:', data);
  }
}

// Example usage
addEmail('example@example.com'); // Replace with the email you want to add
