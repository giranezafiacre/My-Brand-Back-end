
const mongoose = require("mongoose")

const schema = mongoose.Schema({
  email: String,
  password: String,
})
export default mongoose.model("Users", schema);