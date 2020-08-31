const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    content: String,
    author:String,
  })
export default mongoose.model("Posts", schema);