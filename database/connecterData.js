const  Sequelize  = require("sequelize")

// let sequelize = new Sequelize("migration_sequelize","kionou","12345",{
//     dialect:'mysql',
//     host:'192.168.64.2',
// })

// let sequelize = new Sequelize("migration_sequelize","postgres","Laloi2015",{
//     dialect:'postgres',
//     host:'localhost',
//     port:'5432'
// })

let sequelize = new Sequelize("migration_sequelize","postgres","Laloi2015",{
    dialect:'postgres',
    protocol: 'postgres',
    host:'localhost',
    port:'5432',
    //  dialectOptions: {
    //      ssl: {
    //          require: true,
    //          rejectUnauthorized: false
    //      }
    //  }
 
})

module.exports=sequelize;