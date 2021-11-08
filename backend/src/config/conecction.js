const mongoose = require("mongoose")
class Conecction {
    constructor(){
        this.databaseConnectionMongoDB()
    }
    databaseConnectionMongoDB(){
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/mymoney")
        .then(()=>{
            console.log("ok")
        })
        .catch((e)=>console.log(`erro ao estabelecer conexao ${e}`))
    }
    
}
module.exports = new Conecction()