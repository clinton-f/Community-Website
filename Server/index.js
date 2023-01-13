const express = require('express');
// Create the Server
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');



// Connect Database
connectDB();
app.use(cors({origin: 'https://cobblestone-place.netlify.app'}));


//Middleware
app.use(express.json());

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
