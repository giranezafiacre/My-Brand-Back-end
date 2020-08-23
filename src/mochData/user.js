import { v4 as uuidv4 } from 'uuid';

var users = [{
    email:'fiacre@gmail.com',
    password:'123456',
    role:'user'
},
{
    email:'cynthia@mk.com',
    password:'123456',
    role:'user'
},
{
    email:'alfred@mk.com',
    password:'1234567',
    role:'user'
},
{
    email:'fiacre1@gmail.com',
    password:'123456',
    role:'user'
},
{
    email:'celine@cr.com',
    password:'123456',
    role:'user'
}
];

users=users.map((user)=>({id:uuidv4(), ...user}));
export default users;