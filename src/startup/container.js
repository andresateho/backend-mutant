const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services
const { MutantService } = require("../services");

// controllers


// routes
const Routes = require("../routes");

// models
const { Mutant } = require("../models");

// repositories
const { MutantRepository } = require("../repositories");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        MutantService: asClass(MutantService).singleton()
    })
    .register({})
    .register({})
    .register({
        Mutant: asValue(Mutant)
    })
    .register({
        MutantRepository: asClass(MutantRepository).singleton()
    });

module.exports = container;