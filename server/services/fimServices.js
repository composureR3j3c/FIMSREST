const express = require("express");
const { insertAsset } = require("../SqlzDB/asset/insertAsset");
const { selectAsset } = require("../SqlzDB/asset/selectAsset");
const { selectCurr } = require("../SqlzDB/asset/SelectCurr");
const { deleteRecord } = require("../SqlzDB/delete/deleteRec");
const { insertProfit } = require("../SqlzDB/profit/insertTransact");
const { selectProfit } = require("../SqlzDB/profit/selectProfit");
const { checkDBconn } = require("../SqlzDB/selectTest");

exports.checkSrv = (req, res) => {
  res.status(200).send({ message: "Server UP!" });
};

exports.deleteRecord = async (req, res)=>{
  dbData = await deleteRecord(req.body.table,req.body.ID);

  res.status(200).header("Content-Type", "application/json").send({ dbData });
}

exports.checkDB = async (req, res) => {
  dbData = await checkDBconn();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.profit = async (req, res) => {
  dbData = await selectProfit();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.addTransaction = async (req, res) => {
  dbData = await insertProfit(req.body.Type, req.body.Amount, req.body.Desc);
  if (dbData == null || dbData == "" || isNaN(req.body.Amount)) {
    res
      .status(404)
      .header("Content-Type", "application/json")
      .send({ message: "insert not successful" });
  } else {
    res.status(200).header("Content-Type", "application/json").send({ dbData });
  }
};
exports.asset = async (req, res) => {
  dbData = await selectAsset();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.curr = async (req, res) => {
  dbData = await selectCurr();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};


exports.addAsset = async (req, res) => {
  if (isNaN(req.body.Rate) || isNaN(req.body.orgValue)) {
    res
        .status(422)
        .header("Content-Type", "application/json")
        .send({ message: "insert not successful" });
  } else {
    dbData = await insertAsset(req.body.Name, req.body.Category, req.body.acqDate, req.body.Rate, req.body.orgValue);
    if (dbData == null || dbData == "") {
      res
        .status(404)
        .header("Content-Type", "application/json")
        .send({ message: "insert not successful" });
    } else {
      res
        .status(200)
        .header("Content-Type", "application/json")
        .send({ dbData });
    }
  }
};

// Validate request
