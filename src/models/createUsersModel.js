const createUsersModel = (sequelize, DataTypes) => {
    const User = sequelize.define('createUsers', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    }, {
      underscored: true,
      timestamps: false,
    });
  
    return User;
  };
  
module.exports = createUsersModel;