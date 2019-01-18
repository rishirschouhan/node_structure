const models = require('../models/index');
const Sequelize = require('sequelize');

exports.repo = () => {
    return new Promise((resolve, reject) => {
        return resolve("Registered Successfully")
    });
};

