const express = require('express');
// Create the Server
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');


//Middleware
//app.use(express.json()); Updating the Middleware in order to allow the specific frontend URL to access it.
app.use(express.json(
    (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });

    app.get('/api/cms', (req, res) => {
      request(
        { url: 'https://community-website-cms.onrender.com/api/cms' },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }

          res.json(JSON.parse(body));
        }
      )
    }
);


// Connect Database
connectDB();
app.use(cors({origin: 'https://community-website-cms.onrender.com'}));




//app.use('/api/services', require('../src/app/services/services'));

// Testing middleware
app.use('/api/businesscards', require('./routes/businesscards'));
app.use('/api/events', require('./routes/events'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/users', require('./routes/users'));
app.use('/api/cms', require('./routes/cms'));

//const port = 4000;
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...📡`);
});
