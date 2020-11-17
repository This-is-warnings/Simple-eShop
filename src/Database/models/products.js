const sequalize = require('sequelize');

const Product = sequalize.define('product',
{
    // Model attributes are defined here
    id: {
        type:           DataTypes.INTEGER,//DataTypes.UUID,
        primaryKey:     true,
        field:          id,
        //defaultValue:   Sequelize.UUIDV4, //(?) 
        autoIncrement:  true //???? 
    },
    name: {
        type:           DataTypes.STRING(100),
        field:          name,
        allowNull:      false,
        unique:         true
    },
    description: {
        type:           DataTypes.TEXT,
        field:          description,
        allowNull:      false,
        unique:         true
    },
    price: {
        type:           DataTypes.FLOAT,//I couldn't find the money type
        field:          price,
        allowNull:      true,
        unique:         false
    },
    //last_update created by default
    image: {
        type:           DataTypes.STRING(256),
        field:          image,
        allowNull:      true,
        unique:         false
    },
    amount: {
        type:           DataTypes.INTEGER,
        field:          amount,
        allowNull:      false,
        unique:         false
    },
    average_rating: {
        type:           DataTypes.float,
        field:          average_rating,
        allowNull:      true,
        unique:         false
    },

   
  }, {
    
  });

  await Product.sync();
