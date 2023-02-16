const { conn, sqlize } = require("../conn");

async function insertBUY(  buy, sell,id
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `UPDATE currency SET Rate = '${buy}', Sell = '${sell}' WHERE ID = '${id}';`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertBUY }