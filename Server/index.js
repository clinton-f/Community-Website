const express = require('express');
// Create the Server
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

// Connect Database
connectDB();

app.use(cors(corsOptions));
//Middleware
app.use(express.json()); //Updating the Middleware in order to allow the specific frontend URL to access it.

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   next();
});


// app.get('/api/cms', (req, res) => {
//   request(
//     { url: 'https://community-website-cms.onrender.com/api/cms' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: error.message }); // change err to error
//       }

//       res.json(JSON.parse(body));
//     }
//   );
// });




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
