const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500', //Frontend domain
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Database connection
const connection = mysql.createConnection({
    host: 'portfolio-hacuna822.onrender.com',
    user: 'root',
    password: 'basketball@78',
    database: 'contact_form3'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL Database contact_form3!");
});


// Set up the POST route to handle form submissions
app.post('/submit-form', (req, res) => {
    console.log('Received data:', req.body);
    const { name, email, message } = req.body;

    // Validate input (basic check)
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required!');
    }

    // SQL query to insert form data into the database
    const query = 'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)';
    connection.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).send('An error occurred while storing the message.');
        }
        res.status(200).send('Message sent and stored in database!');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
