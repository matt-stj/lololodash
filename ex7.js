var _ = require("lodash");

var worker = function(array) {
  var groupedArticles = _.groupBy(array, 'article')

  var result = []

  _.forEach(groupedArticles, function (article, number){
    result.push({
      article: parseInt(number),
      total_orders: _.reduce(article, function(sum, article){
        return sum + article.quantity;

      }, 0)
    })

  })
  return _.sortBy(result, 'total_orders').reverse();

};

module.exports = worker;
