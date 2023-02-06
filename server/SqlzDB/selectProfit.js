const { conn, sqlize } = require("./conn");

async function selectProfit(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM profit ORDER BY date DESC;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectProfit}