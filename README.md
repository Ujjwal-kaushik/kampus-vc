# Kampus.VC

Kampus.VC is a premium AI content creator marketplace where brands can discover AI creators, generate briefs, invite talent, and manage creative projects.

## Features
- Brand and creator authentication with JWT
- Creator discovery and filtering with MongoDB queries
- Portfolio browsing and rich creator profiles
- AI-assisted brief generation with mock fallback and optional OpenAI integration
- Invitations and project lifecycle management
- Dashboards for brands and creators
- Seed data for demo flow and populated UI

## Tech Stack
- Frontend: React + Vite + Tailwind CSS + React Router
- Backend: Node.js + Express.js + Mongoose
- Database: MongoDB
- Auth: JWT + bcryptjs

## Project Structure

```bash
kampus-vc/
├── client/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── README.md
├── .gitignore
└── package.json
```

## Environment Variables

### Server
Create `server/.env`:

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/kampus_vc
JWT_SECRET=your_secret
OPENAI_API_KEY=
```

### Client
Create `client/.env`:

```bash
VITE_API_URL=http://localhost:5000/api
```

## Installation

```bash
npm install --prefix server
npm install --prefix client
```

## Run in Development

```bash
npm run dev
```

## Demo Accounts
- Brand: brand@demo.com / demo123
- Creator: creator@demo.com / demo123

## Demo Flow
1. Open the app.
2. Click Explore Creators.
3. Search for Runway and filter AI Video.
4. Open a creator profile and invite them to a brief.
5. Switch to the creator account.
6. Accept the invitation from the dashboard.
7. Open the created project and update its progress.
8. Switch back to the brand account and view updates.

## API Overview
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/creators
- GET /api/creators/:id
- POST /api/briefs
- GET /api/briefs
- GET /api/briefs/:id
- POST /api/invitations
- GET /api/invitations
- PUT /api/invitations/:id
- GET /api/projects
- GET /api/projects/:id
- PUT /api/projects/:id
- POST /api/ai/generate-brief

## MongoDB Setup
Install MongoDB locally and run it on port 27017, then create a database named `kampus_vc`.

## AI Brief Builder
The AI brief generation endpoint attempts to use OpenAI only when `OPENAI_API_KEY` is provided. Otherwise, it runs a built-in mock generator that creates a realistic structured brief.

## Notes
This project is designed for demo and educational purposes and includes realistic seeded data to make the marketplace feel active immediately.
