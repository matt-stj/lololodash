   var _ = require("lodash");

   var worker = function(input) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(input);
   };

   module.exports = worker;
