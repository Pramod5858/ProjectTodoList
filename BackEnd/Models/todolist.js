const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodolistSchema = new Schema({
    name:{type: String, required:true},
    auther:{type: String, required:true},
    added:{type: String, required:true}
})

module.exports = mongoose.model("todolist", TodolistSchema, "todolist");