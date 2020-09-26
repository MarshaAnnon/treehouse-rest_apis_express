const express = require('express');
const records = require('./records')
const app = express();


// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', (req, res)=>{
  const quotes = records.getQuotes();
  res.json(quotes);
});

// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', (req, res)=>{  
});
// Send a POST request to /quotes to  CREATE a new quote 
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id DELETE a quote 
// Send a GET request to /quotes/quote/random to READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));

