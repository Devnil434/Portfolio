import { IProject } from '@/types';
import { Languages } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'snil576dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Nilanjan, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
    resume: 'https://drive.google.com/file/d/17XJrNYhTWAePQeBYZ6JmRsEb5FKFX01d/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Devnil434' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/devnil-674580189/' },
    { name: 'twitter', url: 'https://x.com/itsDevNil434' },
];

export const MY_STACK = {
    Languages: [
        {
            name: 'C',
            icon: '/logo/c.jpg',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.jpg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.svg',
        }
    ],
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.png',
        },
        {
            name: 'REST API',
            icon: '/logo/api.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    ai_ml: [
        {
            name: 'Pandas',
            icon: '/logo/pandas.png',
        },
        {
            name: 'Numpy',
            icon: '/logo/numpy.png',
        },
        {
            name: 'OpenCV',
            icon: '/logo/opencv.png',
        },
        {
            name: 'n8n',
            icon: '/logo/n8n.png',
        },
    ],
    tools: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
        {
            name: 'Clerk Auth',
            icon: '/logo/clerk.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Civic-Eye',
        slug: 'civic-eye',
        techStack: [
            'React',
            'Tailwind',
            'Express',
            'Supabase',
        ],
        thumbnail: '/projects/thumbnail/civic-eye.png',
        longThumbnail: '/projects/long/civic-eye.png',
        images: [
            '/projects/images/civic-eye-1.png',
            '/projects/images/civic-eye-2.png',
            '/projects/images/civic-eye-3.png',
            '/projects/images/civic-eye-4.png',
            '/projects/images/civic-eye-5.png',
            '/projects/images/civic-eye-6.png',
            '/projects/images/civic-eye-7.png',
            '/projects/images/civic-eye-8.png',
            '/projects/images/civic-eye-9.png',
            '/projects/images/civic-eye-10.png'
        ],
        liveUrl: '#',
        year: 2025,
        description: `
      Improved civic-issue response by 35% through a scalable reporting dashboard.<br/>
      Built REST API achieving 99% uptime; added logs reducing debugging time by 60%.
      `,
        role: `Software Developer`,
    },
    {
        title: 'LawMind',
        slug: 'lawmind',
        techStack: [
            'Next.js',
            'Cerebras API',
            'Docker',
            'Meta Llama 3',
        ],
        thumbnail: '/projects/thumbnail/LawMind.png',
        longThumbnail: '/projects/long/LawMind.png',
        images: [
            '/projects/images/LawMind-1.png',
            '/projects/images/LawMind-2.png',
            '/projects/images/LawMind-3.png',
            '/projects/images/LawMind-4.png',
            '/projects/images/LawMind-5.png'
        ],
        liveUrl: '#',
        year: 2025,
        description: `
      Automated legal document analysis improving review speed by 70%.<br/>
      Improved summary clarity by 50% using LLM-based pipelines.
      `,
        role: `Backend & AI Developer`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Open Source Contributor',
        company: 'GSSoC, OSCI, Hacktoberfest, Open-Odyssey',
        duration: '2023 - Present',
    },
];

export const MY_EDUCATION = [
    {
        title: 'B.Tech in Computer Science & Engineering (IoT)',
        company: 'Techno International New Town',
        duration: '2023 - 2027',
    },
];

