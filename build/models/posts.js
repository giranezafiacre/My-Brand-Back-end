"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var posts = [{
  title: 'Understanding Artificial intelligence',
  content: "When most people hear the term artificial intelligence, the first \n    thing they usually think of is robots.That is because big-budget films and \n    novels weave stories about human-like machines that wreak havoc on Earth. \n    But nothing could be further from the truth.Artificial intelligence is based \n    on the principle that human intelligence can be defined in a way that a machine \n    can easily mimic it and execute tasks, from the most simple to those that \n    are even more complex.The goals of artificial intelligence include learning, \n    reasoning, and perception.As technology advances, previous benchmarks that \n    defined artificial intelligence become outdated. For example, machines that \n    calculate basic functions or recognize text through optimal character recognition \n    are no longer considered to embody artificial intelligence, \n    since this function is now taken for granted as an inherent computer function.",
  author: 'Admin'
}, {
  title: 'Software design in software production',
  content: "software design is a process to transform user requirements into some \n    suitable form, which helps the programmer in software coding and implementation.\n    For assessing user requirements, an SRS (Software Requirement Specification) \n    document is created whereas for coding and implementation, there is a need of \n    more specific and detailed requirements in software terms. The output of this \n    process can directly be used into implementation in programming languages.Modular \n    design unintentionally follows the rules of \u2018divide and conquer\u2019 problem-solving \n    strategy this is because there are many other benefits attached with the modular \n    design of a software.Software Design Levels:*Architectural Design - The architectural \n    design is the highest abstract version of the system. It identifies the software as \n    a system with many components interacting with each other. At this, the designers \n    get the idea of proposed solution domain.*Architectural Design - The architectural \n    design is the highest abstract version of the system.It identifies the software as \n    a system with many components interacting with each other. At this level, the \n    designers get the idea of proposed solution domain.*Architectural Design - The \n    architectural design is the highest abstract version of the system. It identifies \n    the software as a system with many components interacting with each other. At this                        \n    level, the designers get the idea of proposed solution domain.design is good",
  author: 'Antoinette'
}, {
  title: 'HTML:HyperText Markup Language',
  content: "HTML (HyperText Markup Language) is the most basic building block of the Web. \n    It defines the meaning and structure of web content. Other technologies besides HTML \n    are generally used to describe a web page's appearance/presentation (CSS) or functionality/\n    behavior (JavaScript).\"Hypertext\" refers to links that connect web pages to one another, \n    either within a single website or between websites.Links are a fundamental aspect of the \n    Web. By uploading content to the Internet and linking it to pages created by other people, \n    you become an active participant in the World Wide Web. HTML uses \"markup\" to annotate text, \n    images, and other content for display in a Web browser. HTML markup includes special \"elements\" \n    such as head, title, body, header, footer, article, section, p, div, span, img, aside, audio, \n    canvas, datalist, details, embed, nav, output, progress, video, ul, ol, li and many others.               \n    An HTML element is set off from other text in a document by \"tags\", which consist of the element                        \n    name surrounded by \"<\" and \">\" . The name of an element inside a tag is case insensitive. That                           \n    is, it can be written in uppercase, lowercase, or a mixture. For example, the title tag                            \n    can be written as Title, TITLE, or in any other way.",
  author: 'Liliane'
}];
posts = posts.map(function (post) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, post);
});
var _default = posts;
exports["default"] = _default;
//# sourceMappingURL=posts.js.map