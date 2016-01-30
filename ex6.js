var _ = require("lodash");

var worker = function(array) {
  var groups = _.groupBy(array, 'username')
    var amount = []
    _.forEach(groups, function (comment, username){
      amount.push({
        username: username,
        comment_count: _.size(comment)
      })
    })
    return _.sortBy(amount, "comment_count").reverse();
};

module.exports = worker;
