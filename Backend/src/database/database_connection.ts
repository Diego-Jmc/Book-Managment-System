const Sequelize = require('sequelize')
import { IDbConnection } from "../interfaces/interfaces"
import { initUser  , initRole, initGender, initEditorial, initBook, initBookLoan, initReview } from "../models/models";

export default class PostgreDbConnection implements IDbConnection{

  public sequelize = Sequelize || undefined
 

  private dbName = process.env.POSTGRE_HOST
  private port = process.env.POSTGRE_PORT
  private user = process.env.POSTGRE_USER
  private password = process.env.POSTGRE_PASSWORD?.toString()
  private database = process.env.POSTGRE_DATABASE


  constructor(){
  
    this.connect()
    this.syncDatabaseObjects()
    initUser(this.sequelize);
    initRole(this.sequelize)
    initGender(this.sequelize)
    initEditorial(this.sequelize)
    initBook(this.sequelize)
    initBookLoan(this.sequelize)
    initReview(this.sequelize)
  }


 syncDatabaseObjects(){
    this.sequelize.sync()
  .then(() => {
    console.log('✔️ Tables sync.');
  })
  .catch((error: Error) => {
    console.error('❌ Error trying to sync tables', error);
  });
  }

  connect(): void {

    this.sequelize = new Sequelize({
      database: process.env.POSTGRE_DATABASE ,
      username: process.env.POSTGRE_USER ,
      password: process.env.POSTGRE_PASSWORD ,
      host: process.env.POSTGRE_HOST ,
      port: process.env.POSTGRE_PORT ,
      dialect: 'postgres',

    })





    this.sequelize.authenticate().then(() => {
      console.log(`✔️ Conecction sucesfull to postgre  at port  ${this.port}`);
    }).catch((error: Error) => {
      console.error(`❌ Error trying to connect:  ${error}`);
    });
    
    
}

  
}


