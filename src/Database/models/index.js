const Sequilize = require('sequelize');

const sequilize = new Sequilize('eshop','root','vitalik123456',
{
    dialect:'mysql',
    host:'localhost'
    
});

const User = require('./users.js')(sequilize);
const Product = require('./products.js')(sequilize);
const Favorite = require('./favorites.js')(sequilize);
const Mark = require('./marks.js')(sequilize);
const Delete_request = require('./delete_requests.js')(sequilize);
const User_role = require('./user_roles.js')(sequilize);
const Role = require('./roles.js')(sequilize);

module.exports =
{
    sequilize:sequilize,
    user:User,
    product:Product,
    favorite:Favorite,
    mark:Mark,
    delete_request:Delete_request,
    user_role:User_role,
    role:Role
}



