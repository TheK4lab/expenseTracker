const mongoose = require('mongoose');
const colors = require('colors');

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI.toString(), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`DATABASE CONNECTED`.cyan);
    } catch (error) {
        console.error(`${error}`.red);
        process.exit(1);
    }
}

module.exports = connection;