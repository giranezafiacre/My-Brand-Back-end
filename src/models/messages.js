
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email:String,
    phone:String,
    fullname:String,
    message:String
  })
export default mongoose.model("messages", schema);