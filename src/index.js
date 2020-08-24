import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/usersRoute';
import messageRoute from './routes/messagesRoute';
import postRoute from './routes/postsRoute';
import commentRoute from './routes/commentsRoute';
import 'dotenv/config';

const server = express();

const port = process.env.PORT || 5000;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my brand' }));
server.use('/',userRoute);
server.use('/',messageRoute);
server.use('/',commentRoute);
server.use('/',postRoute);
server.listen(process.env.PORT || 5000, console.log(`server listening on ${port}`));
export default server;
