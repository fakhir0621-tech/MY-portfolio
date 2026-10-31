# Fakhir Jabbar Portfolio (React + Vite)

## Run in VS Code
1. Open this folder in VS Code (File > Open Folder).
2. Terminal > New Terminal, then:
   - `npm install`
   - `npm run dev`  (opens at http://localhost:5173)
3. Production build: `npm run build`. Deploy the `dist` folder (Vercel: framework preset "Vite").

## Where to edit things
- Contact links, email, WhatsApp, LinkedIn: `src/data/config.js`
- Projects (add or edit): `src/data/projects.js`
- Services: `src/data/services.js`
- Skills: `src/data/skills.js`
- Colours and layout: `src/index.css` (the five colours are at the top)

## Images and files
- Profile photo: `public/images/profile.jpg` (replace with the same filename)
- CV: `public/Fakhir_Jabbar_CV.pdf`
- Per project, in `public/project-assets/<project-folder>/`:
  `thumbnail.jpg`, `screenshot-1.jpg` ... `screenshot-6.jpg`
  Folders: `green-tours-planner`, `client-portfolio`, `personal-portfolio`.
  Missing images show a placeholder automatically. Need more than 6 screenshots? Change the number in `gallery("folder", 6)`.
