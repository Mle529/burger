var express = require("express");

var router = express.Router();

// Import the model burger.js to use
var burger = require("../models/burger.js");

// Create our routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertNew([
        "id",
        "burger_name",
        "devoured"
    ], [req.body.id, req.body.burger_name, req.body.devoured
    ], function (results) {
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;


