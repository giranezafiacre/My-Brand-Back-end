import { v4 as uuidv4 } from 'uuid';

var messages = [{
    email:'fiacre@SpeechGrammarList.com',
    phone:'123456',
    fullname:'Fiacre Giraneza',
    message:'how u doin?'
},
{
    email:'console@dm.com',
    phone:'123456',
    fullname:'Console',
    message:'how u doin?'
},

{
    email:'celine@cr.com',
    phone:'123456',
    fullname:'Mugeni Celine',
    message:'how u doin?'
},
{
    email:'cynthia@mk.com',
    phone:'123456',
    fullname:'Cynthia',
    message:'how u doin?'
},
{
    email:'paul@mtr.com',
    phone:'123456',
    fullname:'Nshuti paul',
    message:'how u doin?'
},
];
messages=messages.map((message)=>({id:uuidv4(), ...message}));
export default messages;