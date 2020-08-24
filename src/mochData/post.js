import { v4 as uuidv4 } from 'uuid';

var posts = [{
    title: 'Understanding Artificial intelligence',
    content: `When most people hear the term artificial intelligence, the first 
    thing they usually think of is robots.That is because big-budget films and 
    novels weave stories about human-like machines that wreak havoc on Earth. 
    But nothing could be further from the truth.`,
    author: 'Admin'
},
{
    title: 'Software design in software production',
    content: `software design is a process to transform user requirements into some 
    suitable form, which helps the programmer in software coding and implementation.
    For assessing user requirements, an SRS (Software Requirement Specification) 
    document is created whereas for coding and implementation, there is a need of 
    more specific and detailed requirements in software terms. `,
    author: 'Antoinette'
},

{
    title: 'HTML:HyperText Markup Language',
    content: `HTML (HyperText Markup Language) is the most basic building block of the Web. 
    It defines the meaning and structure of web content. Other technologies besides HTML 
    are generally used to describe a web page's appearance/presentation (CSS) or functionality/
    behavior (JavaScript).`,
    
    author: 'Liliane1'
}
];
posts = posts.map((post) => ({ id: uuidv4(), ...post }));
export default posts;