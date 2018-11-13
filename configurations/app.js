/**
 * Server configuration variables
 */
let appConfig = {};

appConfig.app          = process.env.APP   || "development";
appConfig.port         = process.env.PORT  ||  "3007";

module.exports = appConfig;