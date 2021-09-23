if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    SWAGGER_PATH:`../config/swagger/${process.env.SWAGGER_DOC}`
}