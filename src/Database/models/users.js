const sequalize = require('sequelize');

const User = sequalize.define('user',
{
    // Model attributes are defined here
    id: {
        type:           DataTypes.INTEGER,//DataTypes.UUID,
        primaryKey:     true,
        field:          id,
        //defaultValue:   Sequelize.UUIDV4, //(?) 
        autoIncrement: true //???? 
    },
    name: {
        type:           DataTypes.STRING(100),
        field:          name,
        allowNull:      false,
        unique:         true
    },
    email: {
        type:           DataTypes.STRING(100),
        field:          email,
        allowNull:      false,
        unique:         true
    },
    login: {
        type:           DataTypes.STRING(100),
        field:          login,
        allowNull:      false,
        unique:         true
    },
    password: {
        type:           DataTypes.STRING(100),
        field:          password,
        allowNull:      false,
        unique:         true
    },
   /* deleted_at: { created by default
        type:           DataTypes.DATE,
        field:          create_at
    }*/ 
  }, {
    // Other model options go here
  });

  await User.sync();
