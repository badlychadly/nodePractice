
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const path = require('path');

app.use(express.static('build'));
app.use(cors())
app.use('/api/quotes', require('./routes/quote-routes'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
  });

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});