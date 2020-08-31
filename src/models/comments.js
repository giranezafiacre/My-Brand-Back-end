const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fullname:String,
    suggestion:String,
  })
export default mongoose.model("Comments", schema);