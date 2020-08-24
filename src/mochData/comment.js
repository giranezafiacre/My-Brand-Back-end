import { v4 as uuidv4 } from 'uuid';

var comments=[ {
        fullname: 'Fiacre',
        suggestion: 'design is awesome job'
    },
    {
        fullname: 'maxime',
        suggestion: 'how u doin?'
    },
    {
        fullname: 'Eva',
        suggestion: 'how to understand HTML?'
    }
]
comments = comments.map((comment) => ({ id: uuidv4(), ...comment }));
export default comments