const { Router } = require("express");
const { ParametersMiddleware } = require('../middlewares');

module.exports = function({ MutantController }){
    const router = Router();

    router.get("/stats", MutantController.getAll);
    router.post("/mutant/", ParametersMiddleware, MutantController.create);

    return router;
};