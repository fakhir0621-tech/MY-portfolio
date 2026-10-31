export const services = [
  {
    id: "frontend", icon: "monitor", title: "Frontend Web Development",
    summary: "Responsive, modern interfaces built with React and JavaScript.",
    description: [
      "I build responsive, modern and user-friendly interfaces using React.js, JavaScript, HTML, CSS, Bootstrap and Tailwind CSS.",
      "Work is organised into reusable, component-based building blocks, with clear navigation, interactive UI elements and layouts that adapt from large desktop screens down to small phones.",
    ],
    points: ["Responsive layouts", "Component-based architecture", "Interactive UI elements and navigation", "Reusable components", "Cross-device compatibility"],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    id: "fullstack", icon: "layers", title: "Full Stack Web Development",
    summary: "Complete web applications with React, Node.js, Express and MongoDB.",
    description: [
      "I build complete web applications with React.js on the frontend and Node.js, Express.js and MongoDB on the backend.",
      "That covers connecting the interface to the server, database operations, application logic and a project structure that stays maintainable as features are added.",
    ],
    points: ["Frontend and backend integration", "Database operations", "API design and consumption", "Application logic", "Maintainable project structure"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: "backend", icon: "server", title: "Backend Development and REST APIs",
    summary: "Endpoints, data models and secure server-side logic.",
    description: [
      "I develop backend functionality including RESTful endpoints, data models, request handling and validation, plus authentication and authorization.",
      "I also connect frontend interfaces with backend services and third-party APIs so the whole application works as one system.",
    ],
    points: ["RESTful endpoints", "Data models with MongoDB", "Request handling", "Authentication and authorization", "Third-party integrations"],
    tech: ["Node.js", "Express.js", "MongoDB", "Postman", "REST APIs"],
  },
  {
    id: "auth", icon: "lock", title: "Authentication and Secure User Systems",
    summary: "Registration, login, protected routes and role-based access.",
    description: [
      "I implement user registration and login, JWT-based authentication, protected routes, role-based permissions and email-based password recovery.",
      "JWT is one part of a secure system, not a guarantee of one: it works alongside input validation, hashed credentials and sensible server-side checks.",
    ],
    points: ["Registration and login", "JWT-based authentication", "Protected routes", "Role-based permissions", "Password recovery by email"],
    tech: ["JWT", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
  },
  {
    id: "ai", icon: "bot", title: "AI Chatbot and API Integration",
    summary: "Context-aware chatbots powered by Groq and Llama 3.",
    description: [
      "I integrate AI-powered chatbots into web applications using services such as Groq with Llama 3 models.",
      "The chatbot can be tailored to a website's subject, for example tourism, so it gives relevant, contextual answers and recommendations, and it can be combined with other third-party APIs.",
    ],
    points: ["Chatbot UI and backend endpoint", "Subject-focused, contextual responses", "AI-based recommendations", "Combining AI with other APIs"],
    tech: ["Groq API", "Llama 3", "Node.js", "React.js"],
  },
  {
    id: "weather", icon: "cloud", title: "Weather Forecast Integration",
    summary: "Live weather and forecasts inside your website.",
    description: [
      "I integrate weather APIs to show live conditions and forecasts directly in a website.",
      "My project experience uses the OpenWeather API on a tourism platform, giving visitors destination weather information to help plan their trips.",
    ],
    points: ["Live weather data", "Forecast display", "Destination-based lookups", "Clear, mobile-friendly presentation"],
    tech: ["OpenWeather API", "React.js", "Node.js"],
  },
  {
    id: "admin", icon: "dashboard", title: "Admin Dashboards and Management Systems",
    summary: "Dashboards for managing users, bookings, reviews and content.",
    description: [
      "I design dashboard interfaces and the backend functionality behind them for managing records, users, bookings, reviews, content and analytics.",
      "Access is restricted by role so only authorised administrators can reach management features.",
    ],
    points: ["Record, user and booking management", "Review moderation", "Content management", "Analytics views", "Role-restricted access"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: "deploy", icon: "rocket", title: "Website Deployment and Maintenance",
    summary: "Getting projects online with Git, GitHub and Vercel.",
    description: [
      "I can prepare projects for deployment, configure frontend and backend environments, use Git and GitHub for version control and deploy supported applications on services such as Vercel.",
      "Ongoing maintenance is something we can agree on per project rather than a default part of every engagement.",
    ],
    points: ["Production builds", "Environment configuration", "Git and GitHub version control", "Deployment on Vercel"],
    tech: ["Git", "GitHub", "Vercel", "npm"],
  },
];
