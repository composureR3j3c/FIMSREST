const { conn, sqlize } = require("../conn");

async function insertPayable(  DueDate,
  Amount,
  Invoice,
  Supplier,
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `INSERT INTO payable (Date, DueDate, Amount, Invoice, Supplier) VALUES 
        ('${Date.now()}', '${DueDate}', '${Amount}', '${Invoice}','${Supplier}');`
      );
      console.log(Date.now())
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertPayable}