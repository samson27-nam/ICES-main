import RenderHeader from "../common/Header.js";
import RenderFooter from "../common/Footer.js";

// GLOBAL DATA
const pageName = "Our Department";

// DOM ELEMENTS
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const currentYearElement = document.getElementById("currentYear");
const programsGrid = document.getElementById("programsGrid");
const researchGrid = document.getElementById("researchGrid");
const lecturersGrid = document.getElementById("lecturersGrid");

// PROGRAMS DATA
    const programs = [
        {
            icon: '🏗️',
            title: 'Bachelor of Civil Engineering',
            description:
                'A rigorous 5-year undergraduate program designed to build strong foundations in structural design, transportation systems, geotechnical analysis, and water resource management, preparing students for both industry and research careers.',
            duration: '5 Years',
            level: 'Undergraduate',
        },
        {
            icon: '📏',
            title: 'Diploma in Civil Engineering',
            description:
                'A practical, skills-oriented program that equips learners with core knowledge in surveying, materials testing, and construction site supervision, tailored for immediate application in the civil engineering industry.',
            duration: '3 Years',
            level: 'Undergraduate',
        },
        {
            icon: '🧱',
            title: 'Diploma in Construction Technology',
            description:
                'Focused on modern construction methods, this program blends theory and fieldwork to develop expertise in project management, construction materials, and sustainable building techniques.',
            duration: '3 Years',
            level: 'Undergraduate',
        },
        {
            icon: '📐',
            title: 'Master of Science in Civil Engineering',
            description:
                'An advanced postgraduate program emphasizing computational design, structural analysis, transportation planning, and hydraulic systems, aimed at developing engineers capable of tackling complex infrastructure challenges.',
            duration: '2 Years',
            level: 'Postgraduate',
        },
        {
            icon: '🏙️',
            title: 'Master of Science in Engineering (Infrastructure Development and Management)',
            description:
                'This program develops professionals with technical and managerial expertise for planning, designing, and managing large-scale infrastructure projects with a focus on resilience and sustainability.',
            duration: '2 Years',
            level: 'Postgraduate',
        },
        {
            icon: '🔬',
            title: 'PhD in Engineering (Infrastructure Development & Management)',
            description:
                'A research-intensive doctoral program exploring frontier topics such as smart cities, green infrastructure, and advanced construction materials, fostering innovation and global leadership in sustainable development.',
            duration: '3 Years',
            level: 'Postgraduate',
        },
        {
            icon: '🎓',
            title: 'PhD and MPhil (Civil Engineering)',
            description:
                'An advanced research track for scholars seeking to contribute original findings in structural engineering, environmental systems, or transportation technology, supported by world-class academic mentorship.',
            duration: '2 Years',
            level: 'Postgraduate',
        },
    ];

// RESEARCH DATA
    const research = [
        {
            icon: '🏠',
            title: 'A building classification scheme of housing stock in Malawi for earthquake risk assessment',
            author: 'Prof. Ignasio Ngoma',
            description:
                'This study presents a building classification scheme for residential houses in Malawi by focusing upon informal construction, which accounts for more than 90% of housing in the country with the highest urbanisation rate in the world.',
            color: 'bg-[#fe7701]',
            link: 'https://doi.org/10.1007/S10901-019-09697-5',
        },
        {
            icon: '🚧',
            title: 'Evaluating Flexible Pavement Rutting Damage Caused by Heavy Traffic Loads',
            author: 'Prof. Ignasio Ngoma',
            description:
                'This research was undertaken to evaluate road pavement sections experiencing serious rutting damage induced by heavy traffic vehicles and those experiencing little or no rutting damage. The study was conducted along the HHI–Machinjiri (S137) road using field investigations and surveys.',
            color: 'bg-[#1f1a50]',
            link: 'https://d1wqtxts1xzle7.cloudfront.net/94840014/122-128-libre.pdf?1669405562=&response-content-disposition=attachment%3B+filename%3DEvaluating_Flexible_Pavement_Rutting_Dam.pdf&Expires=1762953878&Signature=Vev-yk4eQtByJo5vvfAuTyhZsez-zKQQJigDThQ4Lpjt9Np3femEXjvI~kmgopKaWw2V3jTWTfSmtq6aEiBzVtiDtbOvNtSYdNAm7pkJcM3Fah~xpD93Z2pdKR0Rz8-v948us2PQhVBVQP6Vb40pHOd4CFEJWnsb4FPNBjwWwCTxoOBACeq6cFQih2EUFfxUKSyciaK~Bk1mHj7a3vbLmjLKpvGc5HntED1gECPff3BSc~ojRbDivpQz7F5lZlcxwvbuuY2fZoZS5uUEYczb12-~l08BpTlWZoiI6oJ8igYz1SdZeIIlIqD1P-uhFTCxCTUGHgsEevtHLaOxS4Sl6Q__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
        },
        {
            icon: '🌾',
            title: 'Agricultural Solid Waste as Source of Supplementary Cementitious Materials in Developing Countries',
            author: 'Dr. Peter B.K Mbewe',
            description:
                'This paper summarizes the engineering properties of concrete produced using widespread agricultural wastes such as palm oil fuel ash, rice husk ash, sugarcane bagasse ash, and bamboo leaf ash.',
            color: 'bg-[#fe7701]',
            link: 'https://doi.org/10.3390/MA12071112',
        },
        {
            icon: '🧱',
            title: 'A sustainable alternative to traditional building materials: assessing stabilised soil blocks for performance and cost in Malawi',
            author: 'Assoc. Prof. Innocent Kafodya',
            description:
                'This article evaluates the performance of cement as a stabiliser in soil-stabilised blocks, proposing cement ratios that reduce cost while maintaining structural integrity for local construction.',
            color: 'bg-[#1f1a50]',
            link: 'https://doi.org/10.1080/19397038.2023.2237062',
        },
    ];

// LECTURERS DATA
    const lecturers = [
    {
        name: 'Dr. Innocent Kafodya',
        title: 'Associate Professor & Department Head',
        specialization: 'Structural Engineering',
        email: 'head-civil@mubas.ac.mw',
        achievements: ['15+ years experience', 'Published 20+ papers'],
        image: 'Kafodya.jpg'

    },
    {
        name: 'Dr. Faidess Mwale',
        title: 'Associate Professor',
        specialization: 'Water Resources Engineering and Management and Consultant',
        email: 'fmwale@mubas.ac.mw',
        achievements: ['20+ years experience', 'Industry consultant', 'Former Department Head'],
        image: 'mwale.jpg'
    },
    {
        name: 'Mr. Wongani Mzembe',
        title: 'Lecturer',
        specialization: 'Transportation Engineering',
        email: 'wmzembe@mubas.ac.mw',
        achievements: ['Society Academic Patron','Industry liaison', '10+ years experience'],
        image: 'mzembe.jpg'
    },
    {
        name: 'Dr. Peter Mbewe',
        title: 'Senior Lecturer',
        specialization: 'Structural Engineering',
        email: 'pmbewe@mubas.ac.mw',
        achievements: ['Former Department Head', '20+ years experience'],
        image: 'mbewe.jpg'
    },
    ];

// RENDER FUNCTIONS
function renderProgram(program) {
    return `
        <div class="bg-gray-50 rounded-lg p-6 hover-card">
            <div class="bg-[#fe7701] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span class="text-3xl">${program.icon}</span>
            </div>
            <h3 class="text-[#1f1a50] mb-3">${program.title}</h3>
            <p class="text-gray-600 text-sm mb-4">${program.description}</p>
            <div class="flex gap-4 text-sm">
                <div>
                    <span class="text-[#fe7701] font-medium">Duration:</span>
                    <span class="text-gray-700 ml-1">${program.duration}</span>
                </div>
                <div>
                    <span class="text-[#fe7701] font-medium">Level:</span>
                    <span class="text-gray-700 ml-1">${program.level}</span>
                </div>
            </div>
        </div>
    `;
}

function renderPrograms() {
    if (!programsGrid) return;
    programsGrid.innerHTML = programs.map(program => renderProgram(program)).join('');
}

function renderResearch(research) {
    return `
        <div class="bg-white rounded-lg p-6 shadow-sm hover-card">
            <div class="${research.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">${research.icon}</span>
            </div>
            <div class="text-[#fe7701] text-sm font-medium mb-2">${research.author}</div>
            <h3 class="text-[#1f1a50] mb-2">${research.title}</h3>
            <p class="text-gray-600 text-sm">${research.description}</p>
            <a href="${research.link}"><div class="text-[#fe7701] text-sm font-medium mb-2">Read full document</div></a>
        </div>
    `;
}

function renderResearchItems() {
    if (!researchGrid) return;
    researchGrid.innerHTML = research.map(item => renderResearch(item)).join('');
}

function renderLecturer(lecturer) {
    const achievementsList = lecturer.achievements.map(a => 
        `<li class="text-xs text-gray-600 flex items-start">
            <span class="text-[#fe7701] mr-2">•</span>
            <span>${a}</span>
        </li>`
    ).join('');

    return `
        <div class="bg-gray-50 rounded-lg overflow-hidden hover-card">
            <div class="bg-[#1f1a50] h-48 flex items-center justify-center">
                <div class="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <div class="text-white text-3xl font-bold">
                        <img src="${lecturer.image}" class="rounded-full"/>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-[#1f1a50] mb-1">${lecturer.name}</h3>
                <div class="text-[#fe7701] text-sm mb-2 font-medium">${lecturer.title}</div>
                <p class="text-gray-600 text-sm mb-4">${lecturer.specialization}</p>
                <div class="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 text-[#fe7701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:${lecturer.email}" class="hover:text-[#fe7701] transition-colors">
                        ${lecturer.email}
                    </a>
                </div>
                <div class="border-t border-gray-200 pt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-[#fe7701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                        <span class="text-sm text-[#1f1a50] font-medium">Key Highlights</span>
                    </div>
                    <ul class="space-y-1">
                        ${achievementsList}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function renderLecturers() {
    if (!lecturersGrid) return;
    lecturersGrid.innerHTML = lecturers.map(lecturer => renderLecturer(lecturer)).join('');
}

// EVENT LISTENERS
function setupEventListeners() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }
}

// INITIALIZATION
function init() {
    RenderHeader(pageName);
    setupEventListeners();
    renderPrograms();
    renderResearchItems();
    renderLecturers();
    RenderFooter();
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

init();

