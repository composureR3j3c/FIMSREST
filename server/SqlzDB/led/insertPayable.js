const { conn, sqlize } = require("../conn");

async function insertPayable(  acDate,DueDate,
  Amount,
  Invoice,
  Supplier,
  type
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `INSERT INTO payable (Date, DueDate, Amount, Invoice, Supplier,type) VALUES 
        ('${acDate}', '${DueDate}', '${Amount}', '${Invoice}','${Supplier}','${type}');`
      );
      console.log(acDate)
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

async function insertPaid(  
  Amount,
  Invoice,pDate
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `INSERT INTO payments (Amount, Invoice,Date) VALUES 
        ('${Amount}', '${Invoice}','${pDate}');`
      );
      console.log(acDate)
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertPayable,insertPaid}