import * as dao from "./dao.js";

function ReviewRoutes(app) {

    const createNewReview = async (req, res) => {
        try {
            const data = req.body;

            const result = await dao.createReview(data);

            res.send(result);
        } catch (err) {
            console.log(err);
            return res.status(403).send({ success: false, message: "An errror occured" });
        }
    };
    const loadAllReviews = async (req, res) => {
        try {
            const result = await dao.loadAllReviews();

            res.send(result);
        } catch (err) {
            console.log(err);
            return res.status(403).send({ success: false, message: "An errror occured" });
        }
    };

    app.post("/api/review/create", createNewReview);
    app.get("/api/review/all-reviews", loadAllReviews);
}
export default ReviewRoutes;
