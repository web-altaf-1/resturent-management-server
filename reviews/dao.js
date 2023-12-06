import ReviewModel from "./model";

export const createReview = async (data) => {
    try {
        const createdReview = await ReviewModel.create(data);

        return createdReview;
    } catch (error) {
        return error;
    }
}
export const loadAllReviews = async () => {
    try {
        const result = await ReviewModel.find({});
        return result;
    } catch (error) {
        return error;
    }
}
