// Add a new project by copying one object below. Put images in public/project-assets/<folder>/.
// Missing images show a clean placeholder automatically.
const gallery = (folder, n = 6) =>
  Array.from({ length: n }, (_, i) => ({
    src: `/project-assets/${folder}/screenshot-${i + 1}.jpg`,
    alt: `Screenshot ${i + 1}`,
  }));

export const projects = [
  {
    id: "green-tours-planner",
    title: "Green Tours Planner (Intelligent Tourism Platform)",
    category: "Full-stack web application",
    status: "Delivered",
    shortDescription: "A tourism management and travel-planning platform with bookings, an AI chatbot, weather forecasts and 3D virtual tours.",
    thumbnail: "/project-assets/green-tours-planner/thumbnail.jpg",
    overview:
      "Green Tours Planner is a full-stack tourism management and travel-planning web application. It helps users explore tour packages, access travel information, manage bookings and use intelligent tourism features.",
    purpose:
      "Give travellers one place to discover tours, check destination conditions and book, while giving administrators the tools to run packages, bookings, reviews and users.",
    role:
      "Full Stack Web Developer on this platform, which belongs to another student's project. I work across React frontend, Express APIs and MongoDB, as described in my CV.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Groq", "Llama 3", "OpenWeather API", "Nodemailer", "Git", "GitHub"],
    features: [
      "User registration, login and profiles with JWT authentication and authorization",
      "Tour discovery and tour detail pages",
      "Wishlist functionality",
      "Booking management with departures and seat selection",
      "Payment processing, payment verification and invoice generation",
      "Reviews and ratings with admin moderation",
      "Admin dashboard: tour packages, bookings, users and analytics",
      "AI-powered tourism chatbot and travel recommendations",
      "Weather information and forecasts",
      "Interactive 3D virtual tours",
      "Password recovery by email",
      "Support and contact messaging",
      "Responsive frontend design",
    ],
    implementation: [
      "AI chatbot: a tourism-focused assistant powered by Groq and Llama 3 that answers travel questions and suggests destinations.",
      "Weather: the OpenWeather API provides destination weather and forecasts so visitors can judge when to travel.",
      "3D virtual tours: 360-degree scenes let visitors explore destinations before booking.",
      "Bookings: tour packages have departures, users pick seats and pay, payments are verified, and administrators monitor everything from the dashboard.",
      "Password recovery: Nodemailer sends reset links with expiring tokens.",
    ],
    note: "The platform is under active development. Feature availability reflects the current build, and some modules may still be in progress.",
    github: "https://github.com/fakhir0621-tech/green-tours-planner",
    live: "", // add a live demo URL here if one exists
    gallery: gallery("green-tours-planner"),
  },
  {
    id: "client-portfolio",
    title: "Client Portfolio Website",
    category: "Paid client project",
    status: "Delivered",
    shortDescription: "A responsive React portfolio website built and deployed for a client.",
    thumbnail: "/project-assets/client-portfolio/thumbnail.jpg",
    overview:
      "A professional portfolio website that I built for a client and was paid for. It presents the client's profile, skills and work in a clean, responsive layout.",
    purpose: "Give the client a polished personal website they can share with employers and clients.",
    role: "Designed and developed the whole frontend and deployed it online.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    features: [
      "Responsive layouts for desktop, tablet and mobile",
      "Component-based React structure",
      "Interactive navigation and interface elements",
      "Deployed online on Vercel",
    ],
    implementation: [
      "Built from reusable React components so sections are easy to update.",
      "Layouts adapt across screen sizes for comfortable reading on phones and large monitors.",
      "Deployed on Vercel for fast, reliable hosting.",
    ],
    github: "",
    live: "", // paste the client's live website URL here
    gallery: gallery("client-portfolio"),
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    category: "Frontend project",
    status: "Live soon",
    shortDescription: "This website: a React portfolio with light and dark modes, project galleries and direct contact options.",
    thumbnail: "/project-assets/personal-portfolio/thumbnail.jpg",
    overview:
      "My own developer portfolio, built with React.js and JavaScript. It presents my technical skills, projects, professional background and contact options.",
    purpose: "Help employers, recruiters and clients understand what I build and reach me quickly.",
    role: "Designed and developed everything, from content structure to responsive styling and interactions.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
    features: [
      "Responsive design from small phones to large desktop screens",
      "Light and dark mode",
      "Clickable service and project detail views",
      "Project screenshot galleries with a lightbox",
      "CV download",
      "Direct email and pre-filled WhatsApp contact",
    ],
    implementation: [
      "All content lives in data files, so adding a project or service needs no component changes.",
      "Modals and the lightbox support keyboard use, Escape to close and background scroll locking.",
    ],
    github: "",
    live: "", // add your final live portfolio URL after deployment
    gallery: gallery("personal-portfolio"),
  },
];
