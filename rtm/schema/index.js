// Load MongoDB 
const mongoose = require('mongoose');

module.exports = () => {
    const mongooseConnection = () => {
        // Set mongoose query in console
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        mongoose.connect(process.env.MONGODB_URI, { dbName: 'Slack' },
            error => error ? console.error(error) : console.log('Mongo connection!!')
        );
    };

    mongooseConnection();

    mongoose.connection.on('error', error => {
        console.error('Mongoose Connection Error', error);
    });

    mongoose.connection.on('disconnected', () => {
        console.error('Mongoose has disconnected, reconnect Mongoose!');
        mongooseConnection();
    });


}

