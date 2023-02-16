export default async function deleteData(table,ID) {
    var item={
        table:table,
        ID:ID 
      }
      

    await fetch("http://127.0.0.1:5000/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(item),
      })


}

export async function UpdateCurr(Buy,Sell,ID) {
  var item={
    Buy:Buy,
    Sell:Sell,
    ID:ID
    }
    console.log(item)

  await fetch("http://127.0.0.1:5000/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(item),
    })


}