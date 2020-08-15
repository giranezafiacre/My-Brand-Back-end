import express from 'express';
import Uroute from './routes/usersRoute';
import Mroute from './routes/messagesRoute';

const server = express();

const port = process.env.PORT || 5000;
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my brand' }));
server.use('/',Uroute);
server.use('/',Mroute);
server.listen(port, console.log(`server listening on ${port}`));
export default server;