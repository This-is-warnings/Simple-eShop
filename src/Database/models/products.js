const sequalize = require('sequelize');
const model = require('./index.js');

module.exports = function(sequelize){
    return sequelize.define('products',
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
        unique:         false
    },
    description: {
        type:           sequalize.TEXT,
        field:          'description',
        allowNull:      false,
        unique:         false,
    },
    price: {
        type:           sequalize.FLOAT,//I couldn't find the money type
        field:          'price',
        allowNull:      true,
        unique:         false
    },
    image: {
        type:           sequalize.STRING(100),
        field:          'image',
        allowNull:      true,
        unique:         false
    },
    amount: {
        type:           sequalize.INTEGER,
        field:          'amount',
        allowNull:      false,
        unique:         false
    },
    average_rating: {
        type:           sequalize.FLOAT,
        field:          'average_rating',
        allowNull:      true,
        unique:         false
    },
   /* deleted_at: { created by default
        type:           DataTypes.DATE,
        field:          create_at
    }*/ 
  }, {
    // Other model options go here
  });
}