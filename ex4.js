var _ = require("lodash");
var worker = function(cities) {
var result = {
  hot: [],
  warm: []
};

function check_temp (item) {
  return item > 19;
}

_.forEach(cities, function (city, name) {

  if (_.every(city, check_temp)) {
    result.hot.push(name);
  } else if (_.some(city, check_temp)) {
    result.warm.push(name);
  }

});

return result;
};


module.exports = worker;
