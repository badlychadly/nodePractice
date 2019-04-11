
const db = require('../db/config');


const Quote = {};

// Define methods for the Quote object

// Returns all quotes from the table
Quote.findAll = () => {
  return db.query(
    `SELECT * FROM quotes`
  );
};

// Return one quote with the specific id
Quote.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM quotes
      WHERE id = $1
    `,
    [id]
  );
};


Quote.createQuote = (data) => {
    console.log(data)
    return db.query('INSERT INTO quotes (quote, author) VALUES ($1, $2)', [data.quote, data.author], (error, results) => {
        console.log(error, results)
        if (error) {
          throw error
        }
        })
}

// Export the Quote object
module.exports = Quote;