import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/usersRoute';
import messageRoute from './routes/messagesRoute';
import postRoute from './routes/postsRoute';
import commentRoute from './routes/commentsRoute';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import 'dotenv/config';
import mongoose from './db/config';

const server = express();
server.use(express.json());
server.use('/', userRoute);
server.use('/', messageRoute);
server.use('/', commentRoute);
server.use('/', postRoute);

const port = process.env.PORT || 5000;
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
mongoose();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my brand' }));
server.use((req, res, next) => { res.status(400).json({ Error: 'Invalid Request' }); next();});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Authorization ,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
server.listen(process.env.PORT || 5000, console.log(`server listening on ${port}`));
export default server;
