const sequalize = require('sequelize');
const model = require('./index.js');

module.exports = function(sequelize){
    return sequelize.define('roles',
{
    // Model attributes are defined here
    id: {
        type:           sequalize.INTEGER,//DataTypes.UUID,
        primaryKey:     true,
        field:          'id',
        //defaultValue:   Sequelize.UUIDV4, //(?) 
        autoIncrement: true //???? 
    },
    name:
    {
        type:           sequalize.STRING(100),
        field:          'value',
        allowNull:      false,
        unique:         true
    }
  }, {
    // Other model options go here
  });
}