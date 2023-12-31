const codeItems = [
  {
    name: "HTML 5",
    codeId: 1,
    img: require("../images/html-icon.svg").default,
    description: `Skills: Semantic HTML, HTML Rendering, Search Engine Optimization (SEO), Metadata, 
    Responsive Web Design, Document Object Model (DOM), DOM Scripting, HTML/JavaScript Integration, HTML/CSS Integration, HTML/CSS Validation`,
    projects: ["Library Landing Page", "Coffeeshop"],
    projectURL: ["https://mnunezsa95.github.io/se_project_library/", "https://mnunezsa95.github.io/se_project_coffeeshop/"],
  },
  {
    name: "CSS 3",
    codeId: 2,
    img: require("../images/css-icon.svg").default,
    description: `Skills: CSS 3, Responsive Web Design, HTML/CSS Integration, HTML/CSS Validation, CSS Flexbox, CSS Grid Layout, CSS Animations`,
    projects: ["Library Landing Page", "Coffeeshop", "Around the U.S", "Bank Marketing Site", "Pig Game", "Number Game"],
    projectURL: [
      "https://mnunezsa95.github.io/se_project_library/",
      "https://mnunezsa95.github.io/se_project_coffeeshop/",
      "https://mnunezsa95.github.io/se_project_aroundtheus/",
      "https://bank-marketing-site-marlon-nunez.netlify.app/",
      "https://pig-game-demo-marlon-nunez.netlify.app/",
      "https://number-guess-game-demo-marlon-nunez.netlify.app/",
    ],
  },
  {
    name: "JavaScript",
    codeId: 3,
    img: require("../images/javascript-icon.svg").default,
    description: `Skills: HTML/JavaScript Integration, EcmaScript 6 (ES6), Virtual DOM, Vanilla JavaScript, Modular JavaScript, Asynchronous JavaScript and XML (AJAX, Async Await, Promises), Object-Oriented JavaScript (ES6 Classes), JavaScript Prototypes, JavaScript eXtension (JSX), External JavaScript Library Integration, Server Side JavaScript (using Node.js), JavaScript Objection Notation (JSON), JavaScript Frameworks (React.js)`,
    projects: ["Around the U.S", "Bank App", "Workout App", "Forkify App", "Bank Marketing Site", "Pig Game", "Number Game"],
    projectURL: [
      "https://mnunezsa95.github.io/se_project_aroundtheus/",
      "https://simple-bank-app-demo-mn.netlify.app/",
      "https://workout-app-marlon-nunez.netlify.app/",
      "https://forkify-marlon-nunez.netlify.app/",
      "https://bank-marketing-site-marlon-nunez.netlify.app/",
      "https://pig-game-demo-marlon-nunez.netlify.app/",
      "https://number-guess-game-demo-marlon-nunez.netlify.app/",
    ],
  },
  {
    name: "React.js",
    codeId: 4,
    img: require("../images/react-icon.svg").default,
    description: `Skills: Client-side Development, Client-server communication, Optimized rendering, Front-end authentication, Third-party API integration, Third-party library integration, Higher order components, React contexts and providers, State management, React hooks, custom hooks, Pure components, Class components, Functional components, Front-end routing, Dynamic routing`,
    projects: ["What to Wear App", "News Explorer App", "Pizza Menu"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/", "https://pizza-menu-demo-marlon-nunez.netlify.app/"],
  },
  {
    name: "Node.js",
    codeId: 5,
    img: require("../images/node-icon.svg").default,
    description:
      "Skills: Server-side development, Server testing, Client-server communication, Back-end routing, Middleware functions, Data parsing, Serving HTML and static files, REST API creation, Back-end authentication, Backend authorization, Third-party Express.js and Node.js modules and packages integration",
    projects: ["What to Wear App", "News Explorer App"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/"],
  },
  {
    name: "Python",
    codeId: 6,
    img: require("../images/python-icon.svg").default,
    description: `Skills: Pandas, Numpy, Matplotlib,`,
    projects: ["No current Python projects"],
    projectURL: [],
  },
  {
    name: "MongoDB",
    codeId: 7,
    img: require("../images/mongodb-icon.svg").default,
    description: `In multiple projects, I've employed MongoDB as the backend database for servers built on Express.js and Node.js. I've crafted schemas and models, established connections between different models, and implemented validation across diverse schemas. MongoDB has played a pivotal role in storing user details from a range of applications, encompassing email data, usernames, securely hashed passwords, profile pictures, and assorted other information.`,
    projects: ["What to Wear App", "News Explorer App"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/"],
  },
  {
    name: "PostgreSQL",
    codeId: 8,
    img: require("../images/postgreSQL-icon.svg").default,
    description:
      "Skills: Data slicing, Aggregate functions, Grouping, Data sorting, Table relationships, Joins, Subqueries, Common table expressions (CTEs), Database installation, Database setup, Database creation, Database administration, Schema creation, Schema management",
    projects: ["No current PostgreSQL projects"],
    projectURL: [null],
  },
  {
    name: "Webpack",
    codeId: 9,
    img: require("../images/webpack-icon.svg").default,
    description:
      "In several of my JavaScript endeavors, Webpack has played a pivotal role, particularly in disassembling intricate JavaScript code into multiple files to seamlessly enable on-demand loading. Going beyond its fundamental purpose, I have leveraged this versatile tool to orchestrate the bundling process from its nascent stages. In doing so, I meticulously configured various loaders for processing not only JavaScript but also CSS files, images, and an array of file types. This comprehensive approach ensures the crafting of an intricately optimized version of the project, where efficiency and performance take center stage.",
    projects: ["Around the U.S"],
    projectURL: ["https://mnunezsa95.github.io/se_project_aroundtheus/"],
  },
  {
    name: "Babel",
    codeId: 10,
    img: require("../images/babel-icon.svg").default,
    description:
      "In my JavaScript projects, I use the latest JavaScript and CSS features. Babel is integrated into my workflows to ensure smooth development and broad browser compatibility. It's applied across various projects to transpile and polyfill JavaScript code, making it executable on a wide range of browsers, old and new. Babel acts as a crucial tool, facilitating the use of modern language features while maintaining consistent user experiences across different environments.",
    projects: ["Around the U.S"],
    projectURL: ["https://mnunezsa95.github.io/se_project_aroundtheus/"],
  },
  {
    name: "Rest Api",
    codeId: 11,
    img: require("../images/rest-api-icon.svg").default,
    description:
      "In developing my full-stack application back-ends, I've embraced REST API principles for a deliberately RESTful design. This allows seamless transmission of necessary information from front-end components, enabling them to prioritize user experience. The result is a clear separation of concerns, with servers efficiently managing request processing and resource management, contributing to a streamlined and maintainable architecture.",
    projects: ["What to Wear App", "News Explorer App"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/"],
  },
  {
    name: "ESLint",
    codeId: 12,
    img: require("../images/ESLint-icon.svg").default,
    description:
      "In the majority of my front-end and back-end projects, I've employed ESLint, a static code analysis tool. Its role is pivotal in maintaining code quality, detecting bugs and errors preemptively before production, and enforcing consistent coding standards. Integrating ESLint into my development workflow has proven instrumental, ensuring that errors are identified early in the web application or website creation process, preventing potential issues from becoming deeply ingrained.",
    projects: ["What to Wear App", "News Explorer App"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/"],
  },
  {
    name: "Google Cloud",
    codeId: 13,
    img: require("../images/googlecloud-icon.svg").default,
    description:
      "I've used Google Cloud to build virtual (Ubuntu) machines for hosting live websites and web applications. After setting up these machines, I integrated third-party plugins like NginX, Certbot, and PM2 for seamless hosting. Both backend and frontend code were efficiently deployed from the cloud. Additionally, I utilized Google Cloud to manage C Name and A records for purchased domain names, including the one used for this website",
    projects: ["What to Wear App", "News Explorer App"],
    projectURL: ["https://www.wtwear.mooo.com/", "https://www.news-explorer.mooo.com/"],
  },
  {
    name: "NPM",
    codeId: 14,
    img: require("../images/npm-icon.svg").default,
    description: `Popular packages and libaries in my codebase:\n React.JS, Node.JS, Express.JS, jsonwebstoken, dotenv, fs, joi, celebrate, crypto, helmet, path, express-winston, winston ,bcryptjs, express-rate-limit, cookie-parser, mongoose million.js, leaflet.js`,
    projects: [],
    projectURL: [],
  },
  {
    name: "Git",
    codeId: 15,
    img: require("../images/git-icon.svg").default,
    description:
      "Skills: Git/GitHub Workflow, SSH Authentication, The Commit Cycle, Repository Management, Git Commits, Working with the Commit Log and Hashes, Git Branches, Pull Requests, Git Conflicts, Git Merges, Managing Git Story, Git Stashing",
    projects: [],
    projectURL: [],
  },
  {
    name: "GitHub",
    codeId: 16,
    img: require("../images/github-icon-code.svg").default,
    description:
      "GitHub serves as the digital haven for the myriad codebases of my web applications and projects. Its version control capabilities facilitate seamless collaboration and evolution, while preserving the essence of each coding endeavor in a dynamic tapestry.",
    projects: ["GitHub Projects"],
    projectURL: ["https://github.com/mnunezsa95"],
  },
  {
    name: "Figma",
    codeId: 17,
    img: require("../images/figma-icon.svg").default,
    description:
      "While at TripleTen, I didn't originate Figma designs from scratch; however, I extensively utilized various existing Figma designs as a reference point. This was instrumental in implementing the front-end UI for web applications and websites developed with HTML/CSS and React.JS. The Figma designs served as visual guides, offering clarity on the intended appearance and rendered view of each specific component within the web application or section of the website.",
    projects: ["Figma Designs"],
    projectURL: [""],
  },
];

export default codeItems;
