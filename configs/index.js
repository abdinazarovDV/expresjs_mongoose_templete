require('dotenv').config()

const fromEnv = (name) => {
    return process.env[name]
}

module.exports = {
    mongoUser: fromEnv("MONGO_USER"),
    mongoPassword: fromEnv("MONGO_PASSWORD"),
    mongoHost: fromEnv("MONGO_HOST"),
    mongoPort: fromEnv("MONGO_PORT"),
    mongoDatabase: fromEnv("MONGO_DATABASE")
}

