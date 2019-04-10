
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/quotes', require('./routes/quote-routes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});