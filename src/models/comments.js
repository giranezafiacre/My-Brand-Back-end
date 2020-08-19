import { v4 as uuidv4 } from 'uuid';

var comments=[ {
        fullname: 'Fiacre Giraneza',
        suggestion: 'design is awesome job'
    },
    {
        fullname: 'max',
        suggestion: 'how u doin?'
    },
    {
        fullname: 'Adam',
        suggestion: 'how to understand HTML?'
    },
    {
        fullname: 'jules',
        suggestion: 'how u doin?'
    }
]
comments = comments.map((comment) => ({ id: uuidv4(), ...comment }));
export default comments