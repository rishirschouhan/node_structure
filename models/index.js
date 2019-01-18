'use strict';

const fs = require('fs'),
    path = require('path'),
    basename = path.basename(module.filename),
    sequelize = require('../dbConnection/connection');

let db = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename);
    })
    .forEach((file) => {
        if (file.slice(-3) !== '.js') return;
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

module.exports = db;