var calculations = {
  salarySum: function() {
    return this.reduce(function(acc, next) {
      return acc + next;
    }, 0);
  },

  logName: function() {
    this.forEach(function(user) {
      console.log(user.name);
    });
  },

  findUsersByIds: function(ids) {
    return this.filter(function(user) {
      return ids.find(function(id) {
          return user.id === id;
      })
    });
  }
};

const array = [1, 2, 3, 4];

var users = [
  {
    id: 1,
    name: "User 2",
    salary: 200
  },
  {
    id: 2,
    name: "User 3",
    salary: 200
  },
  {
    id: 3,
    name: "User 4",
    salary: 200
  }
];

let resultSum = calculations.salarySum.call(users.map(item => item.salary)),
resultLogName = calculations.logName.call(users),
resultFindUsers = calculations.findUsersByIds.apply(users, [[1, 3]]);

console.log(resultSum, resultLogName, resultFindUsers);