import mongoose from 'mongoose';
import userSchema from '#/schema/user';

export default () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        mongoose.connect(process.env.MONGODB_URI, {
        }, err => {
            err
                ? console.error('Mongo connection error', err)
                : console.log('Mongo conncection success');
        });
    }

    connect();
    mongoose.connection.on('error', err => {
        console.error('Mongo connection error', err)
    });
    mongoose.connection.on('disconnected', () => {
        console.error('Mongo connection error, reload connection');
        connect();
    });

    userSchema();
};