//const todolist = require("../Models/todolist");
const { response } = require("express");
const Todolist = require("../Models/todolist");

exports.getDetails = (req, res) => {
  try {
    Todolist.find().then((response) => {
      res
        .status(200)
        .json({ message: "Todolist Fetched Successfully", details: response });
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addDetails = async (req, res) => {
  try {
    console.log(req.body);
    const { name, auther, added } = req.body;

    const Newdata = await new Todolist({
      name: name,
      auther: auther,
      added: added,
    });

    Newdata.save();

    res.status(200).send({ Newdata });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDetails = async (req, res) => {
  try {
    let temp1 = await Todolist.deleteOne({ _id: req.params.id });

    console.log(temp1);
    res.status(200).send({ message: "Deleted Successfull", temp1 });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getidDetails = async (req, res) => {
  try {
    console.log(req.params.id);

    let temp = await Todolist.findById(req.params.id);

    console.log(temp);
    res.status(200).send({ message: "details", temp });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.putidDetails = async (req, res) => {
  try {
    let result = await Todolist.updateOne(
      {
        _id: req.params.id,
      },
      { $set: req.body }
    );

    //let temp = await Todolist.findById(req.params.id);

    console.log(result);
    res.status(200).send({ message: "details", details: result });
  } catch (error) {
    res.status(400).send(error);
  }
};
