const { conn, sqlize } = require("../conn");

async function selectPayable(
  type) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM payable where type='${type}' ORDER BY date;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectPayable}