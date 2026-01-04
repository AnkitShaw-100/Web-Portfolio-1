import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ankitshaw6933@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ankit, I am reaching out to you because...'
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/AnkitShaw-100' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ankit-shaw-884b0728a/' },
    { name: 'twitter', url: 'https://x.com/AnkitShaw750' }
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Prisma', icon: '/logo/prisma.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Finora — Finance Tracker',
        slug: 'finora-finance-tracker',
        liveUrl: 'https://finora-fullstack.vercel.app/',
        year: 2025,
        description: `Full-stack finance tracking application built with the MERN stack. Enables users to track expenses, categorize spending, and visualize financial trends through interactive charts with secure authentication.`,
        role: `Full‑stack Developer
            <ul>
                <li>Built RESTful API with Express for expense CRUD operations and user management</li>
                <li>Implemented secure user authentication with signup and login functionality</li>
                <li>Designed MongoDB schemas with Mongoose for expense and user data</li>
                <li>Developed responsive React UI with Material-UI for expense visualization</li>
                <li>Created interactive charts and dashboard for spending insights and trends</li>
            </ul>`,
        techStack: [
            'React (Vite)',
            'Material-UI',
            'React Router DOM',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
        ],
        images: ['/projects/images/Finora-homepage.png', '/projects/images/Finora-Overview.png', '/projects/images/Finora-Budgeting.png', '/projects/images/Finora-Profile.png'],
    },
    {
        title: 'Mailify — Gmail Clone',
        slug: 'mailify-gmail-clone',
        techStack: [
            'React (Vite)',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'JWT Authentication',
            'Axios',
            'CSS Modules',
        ],
        liveUrl: 'https://mailify-xi.vercel.app/',
        year: 2025,
        description: `Full-stack Gmail-like application with Node.js backend and React frontend. Features include JWT authentication, email management (compose, send, receive, delete), and inbox/sent/trash views with a clean, responsive interface.`,
        role: `Full‑stack Developer
        <ul>
          <li>Built RESTful API with Express for email CRUD operations and user management</li>
          <li>Implemented JWT-based authentication with protected routes and middleware</li>
          <li>Designed MongoDB schemas with Mongoose for users and email data</li>
          <li>Developed responsive React UI with CSS Modules and Axios for API integration</li>
          <li>Created inbox, sent, and trash flows with compose modal and validation</li>
        </ul>`,
        images: [
            '/projects/images/Mailify-Signup.png',
            '/projects/images/Mailfiy-Homepage.png',
            '/projects/images/Mailify-Sent-page.png',
        ],
    },
    {
        title: '3legant. — E‑Commerce',
        slug: '3legant-ecommerce',
        liveUrl: 'https://3legant-fullstack.vercel.app/',
        year: 2025,
        description: `Full-stack e-commerce platform with React + Tailwind CSS frontend and Express + MongoDB backend. Features include JWT authentication, role-based access, product/category management, shopping cart, order processing, and admin/user dashboards.`,
        role: `Full‑stack Developer
            <ul>
                <li>Built RESTful API with Node.js/Express for products, categories, cart, and orders</li>
                <li>Implemented JWT authentication with role-based access control (admin/user)</li>
                <li>Designed MongoDB schemas with Mongoose for scalable data management</li>
                <li>Developed responsive React UI with Tailwind CSS and admin dashboard</li>
                <li>Deployed to Vercel with proper CORS configuration and security measures</li>
            </ul>`,
        techStack: [
            'React (CRA)',
            'Tailwind CSS',
            'React Router',
            'Axios',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'JWT Authentication',
            'PostCSS',
            'Nodemon',
        ],
        images: ['/projects/images/3legant-homepage.png', '/projects/images/3legant-productpage.png', '/projects/images/3legnat-admindashboard.png', '/projects/images/3legant-userdashboard.png'],
    },
];
