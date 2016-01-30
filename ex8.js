var _ = require("lodash");

var worker = function(incomes) {

  var result = { "average": 0,
                 "underperform" : [],
                 "overperform" : []
                }

  var sortedFreelancers = _.sortBy(incomes, 'income')

  var totalIncome       = _.reduce(incomes, function(sum, incomes){
    return sum + incomes.income;

  }, 0)

  var totalFreelancers  = _.size(incomes)

  var averageIncome = totalIncome / totalFreelancers

  result.average = averageIncome

  _.forEach(sortedFreelancers, function (name, income){

    if (name.income > averageIncome){
      result.overperform.push(name)
    }
    else {
      result.underperform.push(name)
    }
  })

  return result

};

module.exports = worker;
