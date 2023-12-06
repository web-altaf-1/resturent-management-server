import ResturantModel from './model'


export const createResturant = async (data) => {
    try {
        const createdResturant = await ResturantModel.create(data);

        return createdResturant;
    } catch (error) {
        return error;
    }
}
export const loadAllResturants = async () => {
    try {
        const result = await ResturantModel.find({});
        return result;
    } catch (error) {
        return error;
    }
}
