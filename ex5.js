var _ = require("lodash");

var worker = function(list){
  return _.chain(list)
          .sortBy()
          .map(function(chr) {
              return chr.toUpperCase() + 'CHAINED';
          })
}

module.exports = worker;
