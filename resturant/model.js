import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    Lat: {
        type: String,
    },
    Long: {
        type: String,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    cuisine: {
        type: [String],
        required: true,
    },
    // reviews: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Users",
    //     }
    // ]
});

const ResturantModel = mongoose.model('Resturant', restaurantSchema);

export default ResturantModel;
