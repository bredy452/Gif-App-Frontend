const express = require('express')
const app = express()
const env = require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const mongoose = require('mongoose');

// set up connection with the DB
mongoose.connect('mongodb://localhost:27017/gif10DB',{
	useNewUrlParser:true,
	useUnifiedTopology: true,
    useFindAndModify: false
});

// set up listeners to monitor your database connection
const db = mongoose.connection;
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (err)=> console.log(err.message));
db.on('disconnected', ()=> console.log('mongoose disconnected'));


app.use(express.json());
//cors middleware
const whitelist = ['http://localhost:3000','http://localhost:3003' ]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))
app.use('/gifs', require('./controllers/gifController'))


app.listen(PORT, () => {
    console.log('gifs is listeing on port', PORT)
})