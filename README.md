# Ganesh Portfolio (Next.js)

This project keeps the existing Claude intro and routes its **Enter Portfolio** link to the new Next.js portfolio.

## Run locally
1. Install Node.js LTS.
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.
7. The original intro appears first. Click **Enter Portfolio** to open `/portfolio`.

## Add your portrait
Copy your chosen portrait photo into:

`public/images/ganesh-profile.jpg`

The hero currently displays a designed `G.` placeholder until that image is added. A vertical portrait with good lighting works best.

## Personal details already configured
- Email: `anakapalliganesh942@gmail.com`
- WhatsApp: `+91 7036571124`
- GitHub: `https://github.com/GANESH-2524`
- LinkedIn: omitted because no profile URL was provided.

## Before publishing
- Review the project descriptions and skill labels for accuracy.
- Add your real portrait at the path above.
- Test the contact form. It opens the visitor's email application with the enquiry filled in; it does not send email through a server.
- Add a LinkedIn URL later if you want that link displayed.
- The voter project is shown as a personal project with a walkthrough by email; no public demo URL has been supplied.

## Deploy
Push the project to GitHub and import the repository into Vercel using the default Next.js settings.


## Performance update
- The intro prefetches `/portfolio` while the intro animation is playing and also warms the route when the Enter Portfolio link receives pointer, keyboard, or touch intent. This helps avoid waiting for the portfolio route to compile/load only after the click.
- Framer Motion uses `LazyMotion` with the DOM animation feature bundle to reduce the animation runtime payload while keeping the existing entrance and scroll animations.
- Existing galaxy orbit, floating tool icons, project/service card animations, and responsive breakpoints are retained.
- Project and service illustrations remain temporary placeholders. Replace the files in `public/images/` when the final images are supplied.

### Test realistic production speed
The first visit to a route in `npm run dev` can be slow because Next.js compiles that route on demand. For a production-like speed test, run:

```bash
npm run build
npm start
```

Then open `http://localhost:3000`.


## Latest visual upgrade
- The original `public/intro.html` animation is retained; its replay/enter controls are removed and it automatically redirects to `/portfolio` after its reveal sequence.
- Project preview crops are stored locally in `public/images/project-voter.webp`, `project-video-editor.webp`, and `project-grocery.webp`.
- The technology galaxy uses colorful Devicon brand marks (loaded from jsDelivr) with Lucide fallbacks.
- Added a desktop-only cursor aura and extra 3D hover depth for project cards. Touch devices keep native touch behaviour.
