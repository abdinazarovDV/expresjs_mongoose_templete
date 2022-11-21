const mongoose = require('mongoose')
const conf = require('../configs/index')

module.exports = async () => {
    let mongoDBUrl =
    "mongodb://" +
    conf.mongoUser +
    ":" +
    conf.mongoPassword +
    "@" +
    conf.mongoHost +
    ":" +
    conf.mongoPort +
    "/" +
    conf.mongoDatabase;
    mongoose.connect(
        mongoDBUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        (err) => {
          if (err) {
            logger.error("There is an error in connecting db (" + mongoDBUrl + "): " + err.message);
            process.exit();
          }
        }
      );
}