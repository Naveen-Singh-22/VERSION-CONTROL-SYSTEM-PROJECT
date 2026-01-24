const espress = require ('express');
const userRouter = require ('./user.router');

const mainRouter = espress.Router();

mainRouter.use(userRouter);

mainRouter.get("/", (req, res) => {
    res.send("Welcome to the User Management System");
});

module.exports = mainRouter;