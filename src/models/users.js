import { v4 as uuidv4 } from 'uuid';

var users = [{
    email:'fiacre@SpeechGrammarList.com',
    password:'123456',
    role:'admin'
},
{
    email:'console@dm.com',
    password:'123456',
    role:'user'
},

{
    email:'celine@cr.com',
    password:'123456',
    role:'user'
},
{
    email:'cynthia@mk.com',
    password:'123456',
    role:'user'
},
{
    email:'paul@mtr.com',
    password:'123456',
    role:'user'
},
];
users=users.map((user)=>({id:uuidv4(), ...user}));
export default users;