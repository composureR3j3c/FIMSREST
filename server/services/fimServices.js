const express = require('express');
const { insertProfit } = require('../SqlzDB/insertTransact');
const { selectProfit } = require('../SqlzDB/selectProfit');
const { checkDBconn } = require('../SqlzDB/selectTest');

exports.checkSrv = (req, res) => {
    res.status(200).send({message: "Server UP!"})  

}

exports.checkDB = async (req, res) => {
    dbData= await checkDBconn()
 
    res.status(200).header("Content-Type", "application/json").send({dbData})  
    
}
exports.profit = async (req, res) => {
    dbData= await selectProfit()
 
    res.status(200).header("Content-Type", "application/json").send({dbData})  
    
}
exports.addTransaction = async (req, res) => {
    dbData= await insertProfit(req.body.Type,req.body.Amount,req.body.Desc) 
  if (dbData==null||dbData==""|| isNaN(req.body.Amount)){
    res.status(404).header("Content-Type", "application/json").send({message:"insert not successful"})
  }
  else{
    res.status(200).header("Content-Type", "application/json").send({dbData}) 
  }
     
    
}

    // Validate request