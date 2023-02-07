const { conn, sqlize } = require("../conn");

async function selectAsset(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM asset ORDER BY acqdate;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectAsset}