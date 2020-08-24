import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../helpers/hashPassword';

var users = [{
    email:'fiacre@SpeechGrammarList.com',
    password:hashPassword('123456'),
    role:'admin'
},
{
    email:'console@dm.com',
    password:hashPassword('123456'),
    role:'user'
},

{
    email:'celine@cr.com',
    password:hashPassword('123456'),
    role:'user'
},
{
    email:'cynthia@mk.com',
    password:hashPassword('123456'),
    role:'user'
},
{
    email:'paul@mtr.com',
    password:hashPassword('123456'),
    role:'user'
},
];
users=users.map((user)=>({id:uuidv4(), ...user}));
export default users;