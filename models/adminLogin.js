module.exports = (sequelize, DataTypes) => {
    const login = sequelize.define("login", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        email : DataTypes.STRING,
        userPassword: DataTypes.STRING,
       },
       {
        tableName: 'userdetails'
    });
    return login;
};
