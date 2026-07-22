import { ProjectContent } from "@/types/project";

export const projectContents: ProjectContent[] = [
  {
    slug: "tanjak-absensi",

    title: "Tanjak Absensi",

    subtitle: "Employee Attendance System for Android & Web",

    description:
      "A modern employee attendance system that combines Android and web applications with WiFi validation, real-time attendance monitoring, employee management, attendance reports, and seamless REST API integration.",

    banner: "/images/projects/tanjak-absensi/banner_tanjakapp.png",

    tech: ["Java", "Android", "PHP", "MySQL", "REST API", "Bootstrap"],

    status: "Completed",

    statusColor: "green",

    year: "2026",

    liveUrl: "https://tanjakabsensi.nvld.my.id",

    githubUrl: "https://github.com/nvld-dev/tanjak-absensi",

    overview: {
      description:
        "Tanjak Absensi is a modern employee attendance platform consisting of an Android application for employees and a web dashboard for administrators. The system validates attendance using registered office WiFi, synchronizes data in real time through REST APIs, and provides comprehensive reporting features for management.",

      problem:
        "Many companies still rely on manual attendance methods, making attendance records inaccurate, difficult to monitor, and time-consuming to recap.",

      solution:
        "Tanjak Absensi digitizes the attendance process through Android and web applications, providing secure WiFi validation, real-time monitoring, employee management, and automated reporting.",

      impact:
        "Attendance recording becomes faster, monitoring is available in real time, and reporting can be generated automatically, reducing administrative workload.",
    },

    features: [
      {
        title: "Android Attendance",
        description:
          "Employees can securely check in and check out through the Android application.",
        icon: "smartphone",
      },
      {
        title: "WiFi Validation",
        description:
          "Attendance is only allowed when connected to the registered office WiFi.",
        icon: "wifi",
      },
      {
        title: "Real-time Dashboard",
        description:
          "Administrators can monitor attendance statistics instantly through the web dashboard.",
        icon: "layout-dashboard",
      },
      {
        title: "Employee Management",
        description:
          "Manage employee accounts, departments, and attendance permissions from one place.",
        icon: "users",
      },
      {
        title: "Attendance Reports",
        description:
          "Generate attendance summaries with automatic PDF export for administrative needs.",
        icon: "file-text",
      },
      {
        title: "REST API Integration",
        description:
          "Android and web applications communicate seamlessly through RESTful APIs.",
        icon: "server",
      },
    ],
    gallery: [
      {
        image: "/images/projects/tanjak-absensi/dashboard.png",
        title: "Dashboard",
        description:
          "Monitor attendance statistics and employee activities in real time.",
      },
      {
        image: "/images/projects/tanjak-absensi/attendance.png",
        title: "Attendance",
        description:
          "Employees can check in and check out securely using WiFi validation.",
      },
      {
        image: "/images/projects/tanjak-absensi/report.png",
        title: "Attendance Report",
        description:
          "Generate attendance reports with PDF export for administration.",
      },
    ],
    techStack: [
      {
        name: "Java",
        category: "Programming Language",
        icon: "java",
      },
      {
        name: "Android",
        category: "Mobile Development",
        icon: "android",
      },
      {
        name: "PHP",
        category: "Backend",
        icon: "php",
      },
      {
        name: "MySQL",
        category: "Database",
        icon: "mysql",
      },
      {
        name: "REST API",
        category: "Communication",
        icon: "api",
      },
      {
        name: "Bootstrap",
        category: "UI Framework",
        icon: "bootstrap",
      },
    ],

    architecture: [
      {
        title: "Android App",
        description: "Employee attendance application",
        icon: "android",
      },
      {
        title: "REST API",
        description: "Communication layer",
        icon: "globe",
      },
      {
        title: "PHP Backend",
        description: "Business logic and API services",
        icon: "server",
      },
      {
        title: "MySQL Database",
        description: "Stores attendance and employee data",
        icon: "database",
      },
    ],
  },

  {
    slug: "absensi-kkn",

    title: "KKN Attendance System",

    subtitle: "QR Code Based Attendance System for Community Service",

    description:
      "A web-based attendance system designed for university KKN programs with QR Code authentication, Google authentication, attendance recap, and administrator management.",

    banner: "/images/projects/absensi-kkn/banner_absensikkn.png",

    tech: ["PHP", "MySQL", "Bootstrap", "AdminLTE", "QR Code", "Google Sheets"],

    status: "In Development",

    statusColor: "yellow",

    year: "2026",

    liveUrl: "",

    githubUrl: "",

    overview: {
      description:
        "The KKN Attendance System digitizes student attendance during community service programs. Students scan QR Codes to check in while administrators manage participants, attendance records, and automatic recap generation.",

      problem:
        "Manual attendance during KKN activities often leads to inaccurate records, slow recap processes, and difficulties in monitoring participant attendance across multiple groups.",

      solution:
        "The system provides QR Code attendance, administrator dashboards, Google authentication, and automatic attendance recap to simplify attendance management during KKN programs.",

      impact:
        "The attendance process becomes faster, attendance records are more accurate, administrators can monitor participants in real time, and recap reports are generated automatically with minimal manual work.",
    },

    features: [
      {
        title: "QR Code Attendance",
        description:
          "Students scan QR Codes to record attendance quickly and accurately.",
        icon: "qr-code",
      },
      {
        title: "Google Authentication",
        description: "Secure sign-in using university Google accounts.",
        icon: "shield-check",
      },
      {
        title: "Participant Management",
        description:
          "Administrators can organize participants, groups, and supervisors efficiently.",
        icon: "users",
      },
      {
        title: "Attendance Reports",
        description:
          "Automatic recap generation for every participant and KKN group.",
        icon: "file-text",
      },
      {
        title: "Google Sheets Sync",
        description:
          "Attendance data can be synchronized automatically with Google Sheets.",
        icon: "database",
      },
      {
        title: "Admin Dashboard",
        description:
          "Real-time attendance monitoring and management through an intuitive dashboard.",
        icon: "layout-dashboard",
      },
    ],

    gallery: [
      {
        image: "/images/projects/absensi-kkn/login.png",
        title: "Login",
        description:
          "Students and administrators securely sign in using Google authentication.",
      },
      {
        image: "/images/projects/absensi-kkn/dashboard.png",
        title: "Dashboard",
        description:
          "Monitor attendance statistics and participant activities in real time.",
      },
      {
        image: "/images/projects/absensi-kkn/qrcode.png",
        title: "QR Code Attendance",
        description:
          "Students scan QR Codes to record attendance quickly and accurately.",
      },
      {
        image: "/images/projects/absensi-kkn/report.png",
        title: "Attendance Report",
        description:
          "Attendance recaps are generated automatically and synchronized with Google Sheets.",
      },
    ],

    techStack: [
      {
        name: "PHP",
        category: "Backend",
        icon: "php",
      },
      {
        name: "MySQL",
        category: "Database",
        icon: "mysql",
      },
      {
        name: "Bootstrap",
        category: "UI Framework",
        icon: "bootstrap",
      },
      {
        name: "AdminLTE",
        category: "Admin Dashboard",
        icon: "adminlte",
      },
      {
        name: "QR Code",
        category: "Authentication",
        icon: "qrcode",
      },
      {
        name: "Google Sheets",
        category: "Cloud Integration",
        icon: "google",
      },
    ],

    architecture: [
      {
        title: "Web Application",
        description: "Attendance management system",
        icon: "globe",
      },
      {
        title: "PHP Backend",
        description: "Processes attendance requests",
        icon: "server",
      },
      {
        title: "MySQL Database",
        description: "Stores attendance records",
        icon: "database",
      },
      {
        title: "Google Sheets",
        description: "Automatic attendance recap",
        icon: "sheet",
      },
    ],
  },

  {
    slug: "web-umkm",

    title: "UMKM Company Profile",

    subtitle: "Modern Business Profile Website for Local Businesses",

    description:
      "A responsive company profile website helping local businesses introduce their products, services, contact information, and digital presence.",

    banner: "/images/projects/web-umkm/banner_webumkm.png",

    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],

    status: "Completed",

    statusColor: "green",

    year: "2026",

    liveUrl: "",

    githubUrl: "",

    overview: {
      description:
        "A modern landing page and company profile website designed to improve the online presence of local businesses through responsive design, SEO optimization, and fast performance.",

      problem:
        "Many local businesses still have limited digital presence, making it difficult for potential customers to discover their products and services online.",

      solution:
        "The website provides a responsive company profile with SEO optimization, product showcases, contact information, and a modern user experience to strengthen the business's online identity.",

      impact:
        "The business gains a professional online presence, improves visibility in search engines, and makes it easier for potential customers to explore products, services, and contact information from any device.",
    },

    features: [
      {
        title: "Responsive Design",
        description:
          "Optimized experience across desktop, tablet, and mobile devices.",
        icon: "smartphone",
      },
      {
        title: "SEO Optimization",
        description:
          "Structured metadata and performance optimizations improve search engine visibility.",
        icon: "search",
      },
      {
        title: "Product Showcase",
        description:
          "Display products and services in a clean and visually appealing layout.",
        icon: "globe",
      },
      {
        title: "Contact Information",
        description:
          "Visitors can easily reach the business through integrated contact details.",
        icon: "users",
      },
      {
        title: "Google Maps Integration",
        description:
          "Help customers quickly locate the business with embedded maps.",
        icon: "map-pinned",
      },
      {
        title: "Fast Deployment",
        description:
          "Hosted on Vercel for high performance, scalability, and easy maintenance.",
        icon: "rocket",
      },
    ],

    gallery: [
      {
        image: "/images/projects/web-umkm/home.png",
        title: "Homepage",
        description:
          "A modern landing page introducing the business and its brand identity.",
      },
      {
        image: "/images/projects/web-umkm/products.png",
        title: "Product Showcase",
        description:
          "Display products in a clean and responsive layout for potential customers.",
      },
      {
        image: "/images/projects/web-umkm/about.png",
        title: "About Us",
        description:
          "Present the company's story, vision, and mission professionally.",
      },
      {
        image: "/images/projects/web-umkm/contact.png",
        title: "Contact",
        description:
          "Provide contact information, social media, and Google Maps integration.",
      },
    ],

    techStack: [
      {
        name: "Next.js",
        category: "Framework",
        icon: "nextjs",
      },
      {
        name: "TypeScript",
        category: "Programming Language",
        icon: "typescript",
      },
      {
        name: "Tailwind CSS",
        category: "CSS Framework",
        icon: "tailwind",
      },
      {
        name: "Vercel",
        category: "Hosting Platform",
        icon: "vercel",
      },
    ],

    architecture: [
      {
        title: "Next.js",
        description: "Frontend application",
        icon: "globe",
      },
      {
        title: "React",
        description: "Interactive UI components",
        icon: "smartphone",
      },
      {
        title: "Tailwind CSS",
        description: "Modern styling framework",
        icon: "cloud",
      },
      {
        title: "Vercel",
        description: "Hosting and deployment",
        icon: "server",
      },
    ],
  },
];

export const getProjectContent = (slug: string): ProjectContent | undefined =>
  projectContents.find((project) => project.slug === slug);
