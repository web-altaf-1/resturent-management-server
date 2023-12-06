import * as dao from "./dao.js";

function ReviewRoutes(app) {

    const createNewResturant = async (req, res) => {
        try {
            const data = req.body;
            const result = await dao.createResturant(data);

            res.send(result);
        } catch (err) {
            console.log(err);
            return res.status(403).send({ success: false, message: "An errror occured" });
        }
    };
    const loadAllResturant = async (req, res) => {
        try {
            const result = await dao.loadAllResturants();

            res.send(result);
        } catch (err) {
            console.log(err);
            return res.status(403).send({ success: false, message: "An errror occured" });
        }
    };

    app.post("/api/resturant/create", createNewResturant);
    app.get("/api/resturant/all-resturant", loadAllResturant);
}
export default ReviewRoutes;
