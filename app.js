import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://shrakvkkwcpihewpxyco.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocmFrdmtrd2NwaWhld3B4eWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MjQxMzYsImV4cCI6MjAzMDIwMDEzNn0.xmKZPBL9J1FmgU1jBwp67ZZYG6L1mKFKRCIc7w-2L8Y';
const database = createClient(supabaseUrl, supabaseKey);


function createMessage(name, email, message) {
    console.log('Sampe sini');
    return database
        .from('message')
        .insert([{ name, email, message }]);
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const { data, error } = await createMessage(name, email, message);

        if (error) {
            throw error;
        }

        alert('Message sent successfully!');
        // Atau lakukan sesuatu setelah berhasil dikirim, seperti mengosongkan formulir
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } catch (error) {
        console.error('Error sending message:', error.message);
        alert('An error occurred while sending your message. Please try again later.');
    }
});
