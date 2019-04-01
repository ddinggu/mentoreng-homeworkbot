import mongoose, { Schema } from 'mongoose';

const homeworkSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  data: Schema.Types.Mixed,
  type: String,
  priority: Number,
  nextRunAt: Date,
  lastModifiedBy: Date,
  lockedAt: Date,
  lastRunAt: Date,
  lastFinishedAt: Date
});

export default mongoose.model('Homework', homeworkSchema, 'Homework');
