const { Router } = require("express");

module.exports = function({ MutantController }){
    const router = Router();

    router.get("/stats", MutantController.getAll);
    router.post("/mutant/", MutantController.create);

    return router;
};