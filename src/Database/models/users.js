const sequalize = require('sequelize');
const model = require('./index.js');

module.exports = function(sequelize){
    return sequelize.define('users',
{
    // Model attributes are defined here
    id: {
        type:           sequalize.INTEGER,//DataTypes.UUID,
        primaryKey:     true,
        field:          'id',
        //defaultValue:   Sequelize.UUIDV4, //(?) 
        autoIncrement: true //???? 
    },
    name: {
        type:           sequalize.STRING(100),
        field:          'name',
        allowNull:      false,
        unique:         false,
        validate:
        {
            notEmpty:  true
        }
    },
    email: {
        type:           sequalize.STRING(100),
        field:          'email',
        allowNull:      false,
        unique:         true,
        validate:
        {
            isEmail:    true,
            notEmpty:  true
        }
    },
    login: {
        type:           sequalize.STRING(100),
        field:          'login',
        allowNull:      false,
        unique:         true,
        validate:
        {
            notEmpty:  true
        }
    },
    password: {
        type:           sequalize.STRING(100),
        field:          'password',
        allowNull:      false,
        unique:         true,
        validate:
        {
            notEmpty:  true
        }
    },
   /* deleted_at: { created by default
        type:           DataTypes.DATE,
        field:          create_at
    }*/ 
  }, {
    // Other model options go here
  });
}