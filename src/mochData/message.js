import { v4 as uuidv4 } from 'uuid';

var messages = [{
    email:'fiacre@GrammarList.com',
    phone:'123456',
    fullname:'Fiacre Giraneza',
    message:'how u doin?'
},
{
    email:'consolata@dm.com',
    phone:'123456',
    fullname:'Console',
    message:'how u doin?'
},
{
    email:'celine1@cr.com',
    phone:'123456',
    fullname:'Mugeni Celine',
    message:'how u doin?'
}
];
messages=messages.map((message)=>({id:uuidv4(), ...message}));
export default messages;