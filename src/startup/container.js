const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services


// controllers


// routes
const Routes = require("../routes");

// models
const { Mutant } = require("../models");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({})
    .register({})
    .register({})
    .register({
        Mutant: asValue(Mutant)
    });

module.exports = container;