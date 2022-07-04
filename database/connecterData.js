const  Sequelize  = require("sequelize")

// let sequelize = new Sequelize("migration_sequelize","kionou","12345",{
//     dialect:'mysql',
//     host:'192.168.64.2',
// })

let sequelize = new Sequelize("migration_sequelize","kionou","12345",{
    dialect:'mysql',
    host:'192.168.64.2',
})

module.exports=sequelize;