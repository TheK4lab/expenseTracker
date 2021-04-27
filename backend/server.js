const dbConnection = require('./database/connection');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

dbConnection();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow));