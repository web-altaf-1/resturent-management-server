import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    restaurant: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

export default ReviewModel;
