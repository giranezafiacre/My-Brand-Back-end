import mongoose from 'mongoose';

const url = "mongodb+srv://Fiacre:Nyagatoma@cluster0.amvqa.mongodb.net/Fiacre-Blog?retryWrites=true&w=majority";
const connectdb=()=>{
  mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("database has started!");
  })
};
export default connectdb; 
