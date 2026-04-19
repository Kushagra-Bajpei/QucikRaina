import mongoose from 'mongoose';

const dreamSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    emotion: {
        type: String,
    },
    interpretation: {
        type: String,
    },
    realityScore: {
        type: Number,
    },
}, { timestamps: true });

const Dream = mongoose.model('Dream', dreamSchema);

export default Dream;
