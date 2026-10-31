// Central place for contact details and links. Edit here; the whole site updates.
const whatsappNumber = "923165252847"; // 03165252847 in international format
const whatsappMessage =
  "Hi Fakhir! I visited your portfolio and would like to discuss a website development project with you. Could we talk about the details?";
const email = "fakhir0621@gmail.com";

export const site = {
  name: "Fakhir Jabbar",
  role: "MERN Stack Developer / Full Stack Web Developer",
  location: "Rawalpindi, Pakistan",
  email,
  mailto: `mailto:${email}`,
  gmailCompose: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappDisplay: "+92 316 5252847",
  github: "https://github.com/fakhir0621-tech/green-tours-planner",
  linkedin: "", // add your LinkedIn URL here; the button appears automatically
  cv: "/Fakhir_Jabbar_CV.pdf",
  cvFileName: "Fakhir_Jabbar_CV.pdf",
  photo: "/images/profile.jpg",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
