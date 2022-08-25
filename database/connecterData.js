const  Sequelize  = require("sequelize")

// let sequelize = new Sequelize("migration_sequelize","kionou","12345",{
//     dialect:'mysql',
//     host:'192.168.64.2',
// })

let sequelize = new Sequelize("migration_sequelize","postgres","Laloi2015",{
    dialect:'postgres',
    host:'localhost',
    port:'5432'
})

// let sequelize = new Sequelize(process.env.DATABASE_URL,{
//     dialect:'postgres',
//     protocol: 'postgres',
//      dialectOptions: {
//          ssl: {
//              require: true,
//              rejectUnauthorized: false
//          }
//      }
//     // host:'localhost',
//     // port:'5432'
// })

module.exports=sequelize;