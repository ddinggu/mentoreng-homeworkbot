const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema({
    channelId: {
        type: String,
        required: true,
        default: 'none'
    },
    botId: {
        type: String,
        required: true,
        default: 'none'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('History', historySchema, 'history');
