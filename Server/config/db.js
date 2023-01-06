const mongoose = require('mongoose');

//++ 
const dotenv = require('dotenv');
dotenv.config(options:{path:'./config/config.env'})


// Getting the environment variables from the variables.env file
require('dotenv').config({ path: 'variables.env' });

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true
        })
        console.log('MongoDB Connected...🗃️ 🔌');

    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB
