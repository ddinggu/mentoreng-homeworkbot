import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

export default mongoose.model('User', userSchema, 'user');
