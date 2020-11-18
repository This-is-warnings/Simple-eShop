const sequalize = require('sequelize');
const model = require('./index.js');

module.exports = function(sequelize){
    return sequelize.define('user_roles',
{
    // Model attributes are defined here
    id: {
        type:           sequalize.INTEGER,//DataTypes.UUID,
        primaryKey:     true,
        field:          'id',
        //defaultValue:   Sequelize.UUIDV4, //(?) 
        autoIncrement: true //???? 
    },
    role_id: {
        type:           sequalize.INTEGER,
        field:          'role_id',
        allowNull:      false,
        unique:         false
    },
    user_id: {
        type:           sequalize.INTEGER,
        field:          'user_id',
        allowNull:      false,
        unique:         false
    }
  }, {
    // Other model options go here
  });
}