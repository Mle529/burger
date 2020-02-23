// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selecAll("burgers", function (res) {
            cb(res);
        });
    },
    insertNew: function (col, vals, cb) {
        orm.insertNew("burgers", function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;