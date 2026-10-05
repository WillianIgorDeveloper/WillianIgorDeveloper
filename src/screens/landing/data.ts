const GITHUB = "https://github.com/WillianIgorDeveloper"

export const LINKS = {
  email: "willianigordeveloper@gmail.com",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/willian-igor-santos/"
}

export const STACK = [
  { key: "frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { key: "mobile", items: ["React Native", "Expo"] },
  { key: "backend", items: ["Node.js", "NestJS", "Express", "Fastify"] },
  { key: "data", items: ["PostgreSQL", "SQL Server", "Supabase"] },
  { key: "infra", items: ["Docker", "AWS", "Render", "Claude Code"] }
] as const

type Project = {
  key: string
  name: string
  year: number
  tags: string[]
  live?: string
  code: string
}

export const PROJECTS: Project[] = [
  {
    key: "chatz",
    name: "Chatz",
    year: 2026,
    tags: ["React", "Socket.IO", "TanStack Query", "Base UI"],
    code: `${GITHUB}/chatz-web`
  },
  {
    key: "hades",
    name: "Hades Enterprises",
    year: 2025,
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    live: "https://hades-greekprojects.netlify.app/",
    code: `${GITHUB}/hades-enterprises`
  },
  {
    key: "simplesrpg",
    name: "SimplesRPG",
    year: 2025,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://simplesrpg.vercel.app",
    code: `${GITHUB}/simplesrpg`
  },
  {
    key: "gmnotes",
    name: "GM Notes",
    year: 2025,
    tags: ["React", "TanStack Query", "i18next", "Zod", "Cypress"],
    live: "https://gmnotes.netlify.app/",
    code: `${GITHUB}/gmnotes`
  },
  {
    key: "stockz",
    name: "Stockz",
    year: 2024,
    tags: ["React", "React Hook Form", "Zod", "Framer Motion"],
    code: `${GITHUB}/Stockz`
  }
]

export const TEMPLATES: Project[] = [
  {
    key: "fastify",
    name: "fastify-api-template",
    year: 2026,
    tags: ["Fastify", "Prisma", "PostgreSQL", "Vitest"],
    code: `${GITHUB}/fastify-api-template`
  },
  {
    key: "next",
    name: "next-web-template",
    year: 2026,
    tags: ["Next.js", "TanStack Query", "Tailwind"],
    live: "https://next-web-template-steel.vercel.app",
    code: `${GITHUB}/next-web-template`
  }
]
