import { v4 as uuidv4 } from 'uuid';

var posts = [{
    title: 'Understanding Artificial intelligence',
    content: `When most people hear the term artificial intelligence, the first 
    thing they usually think of is robots.That is because big-budget films and 
    novels weave stories about human-like machines that wreak havoc on Earth. 
    But nothing could be further from the truth.Artificial intelligence is based 
    on the principle that human intelligence can be defined in a way that a machine 
    can easily mimic it and execute tasks, from the most simple to those that 
    are even more complex.The goals of artificial intelligence include learning, 
    reasoning, and perception.As technology advances, previous benchmarks that 
    defined artificial intelligence become outdated. For example, machines that 
    calculate basic functions or recognize text through optimal character recognition 
    are no longer considered to embody artificial intelligence, 
    since this function is now taken for granted as an inherent computer function.`,
    author: 'Admin'
},
{
    title: 'Software design in software production',
    content: `software design is a process to transform user requirements into some 
    suitable form, which helps the programmer in software coding and implementation.
    For assessing user requirements, an SRS (Software Requirement Specification) 
    document is created whereas for coding and implementation, there is a need of 
    more specific and detailed requirements in software terms. The output of this 
    process can directly be used into implementation in programming languages.Modular 
    design unintentionally follows the rules of ‘divide and conquer’ problem-solving 
    strategy this is because there are many other benefits attached with the modular 
    design of a software.Software Design Levels:*Architectural Design - The architectural 
    design is the highest abstract version of the system. It identifies the software as 
    a system with many components interacting with each other. At this, the designers 
    get the idea of proposed solution domain.*Architectural Design - The architectural 
    design is the highest abstract version of the system.It identifies the software as 
    a system with many components interacting with each other. At this level, the 
    designers get the idea of proposed solution domain.*Architectural Design - The 
    architectural design is the highest abstract version of the system. It identifies 
    the software as a system with many components interacting with each other. At this                        
    level, the designers get the idea of proposed solution domain.design is good`,
    author: 'Antoinette'
},

{
    title: 'HTML:HyperText Markup Language',
    content: `HTML (HyperText Markup Language) is the most basic building block of the Web. 
    It defines the meaning and structure of web content. Other technologies besides HTML 
    are generally used to describe a web page's appearance/presentation (CSS) or functionality/
    behavior (JavaScript)."Hypertext" refers to links that connect web pages to one another, 
    either within a single website or between websites.Links are a fundamental aspect of the 
    Web. By uploading content to the Internet and linking it to pages created by other people, 
    you become an active participant in the World Wide Web. HTML uses "markup" to annotate text, 
    images, and other content for display in a Web browser. HTML markup includes special "elements" 
    such as head, title, body, header, footer, article, section, p, div, span, img, aside, audio, 
    canvas, datalist, details, embed, nav, output, progress, video, ul, ol, li and many others.               
    An HTML element is set off from other text in a document by "tags", which consist of the element                        
    name surrounded by "<" and ">" . The name of an element inside a tag is case insensitive. That                           
    is, it can be written in uppercase, lowercase, or a mixture. For example, the title tag                            
    can be written as Title, TITLE, or in any other way.`,
    
    author: 'Liliane'
}
];
posts = posts.map((post) => ({ id: uuidv4(), ...post }));
export default posts;