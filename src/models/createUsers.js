const UserModel = (sequelize, DataTypes) => {
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
    });
  
    return User;
  };
  
  module.exports = UserModel;