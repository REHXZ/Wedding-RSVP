// Initialization
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uknpeqdlfqmxilnmzbnn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbnBlcWRsZnFteGlsbm16Ym5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjAyMTYsImV4cCI6MjA0NzU5NjIxNn0.Ac3mCSZ6DgadgSHvXkwkDB8H3V8EJzYKZC-TGzlHI60'; // Replace with your actual key
const supabase = createClient(supabaseUrl, supabaseKey);

// Insert email
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('input[name="email"]').value;

    console.log('Email to be inserted:', email);

    try {
        const { data, error } = await supabase
            .from('Email') // Ensure this matches your table name
            .insert([{ Email: email }]);

        if (error) {
            console.error('Error inserting email:', error);
        } else {
            console.log('Email inserted:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
});
