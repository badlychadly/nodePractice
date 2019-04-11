const Quote =  require('../models/quotes');

// Instantiate the controller object
const quoteController = {};

// Controller method for handling a request for all quotes
quoteController.findAll = (req, res) => {
  // Uses the findAll method from Quote
  Quote.findAll()
  .then(quotes => {
    // Sends the quotes as a JSON object
    res.json({
      message: 'Success',
      quotes: quotes
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single quote
quoteController.findById = (req, res) => {
  // Quotes method for finding by id, passes the id as an argument
  Quote.findById(req.params.id)
  .then(quote => {
    // Sends the quote as a JSON object
    res.json({
      message: "Success",
      data: quote
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

quoteController.createQuote = (req, res) => {
    Quote.createQuote(req).then(q => {
        console.log(q)
        res.json({
            message: "Success",
            data: quote
        })
    })
}

// Export the controller
module.exports = quoteController;
