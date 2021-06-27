
const db = require('../utils/db');

const table_name = "account"
module.exports = {
  addAccount(account){
    return db(table_name).insert(account)
  }, 

  async getSingleAccountByEmail(data){
    const result = await db(table_name).where('email', data.email);
    if(result.length > 0){
      return result[0];
    }else{
      return null;
    }
  }
}