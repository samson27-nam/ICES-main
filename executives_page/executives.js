
import RenderFooter from "../common/Footer.js";
import RenderHeader from "../common/Header.js";

// GLOBAL DATA
const currentYear = "2025/2026";
const pageName = "Executives";
const sessions = [
    { year: "2025/2026", current: true },
    { year: "2024/2025", current: false }
];
let session = currentYear;

// DOM ELEMENTS
const sessionButton = document.getElementById("sessionButton");
const sessionDropdown = document.getElementById("sessionDropdown");
const currentSessionSpan = document.getElementById("currentSession");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const leadershipCore = document.getElementById("leadership-core");
const executiveBoard = document.getElementById("executive-board");
const currentYearElement = document.getElementById("currentYear");

// RENDER FUNCTIONS
function renderPerson(person, isLeader) {
    const cardClass = isLeader ? 'leadership-badge' : '';
    const nameTag = isLeader ? 'h3' : 'h4';
    const titleClass = isLeader ? 'p-6' : 'p-5';
    const bioClass = isLeader ? '' : 'text-sm';
    
    return `
        <div class="exec-card bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up">
            <div class="photo-wrapper">
                <img src="${person.image || 'https://images.unsplash.com/photo-1740153204804-200310378f2f'}" alt="${person.name}" class="exec-photo">
                <div class="photo-overlay">
                    <div class="flex space-x-2">
                        <a href="${person.linkedIn}" class="social-icon" target="_blank" rel="noopener noreferrer">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="mailto:${person.email}" class="social-icon">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 11h-10a2 2 0 01-2-2v-10a2 2 0 012-2h14a2 2 0 012 2v5"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="exec-content ${titleClass}">
                <span class="position-badge ${cardClass}">${person.position}</span>
                <${nameTag} class="mt-3 mb-1" style="color: var(--ices-navy);">${person.name}</${nameTag}>
                <p class="text-sm mb-3" style="color: var(--ices-orange);">${person.yearOfStudy} • ${person.major}</p>
                <p class="text-gray-600 ${bioClass}" style="line-height: 1.6;">${person.bio}</p>
            </div>
        </div>
    `;
}

function renderTeam(container, members, isLeader) {
    if (!container) return;
    container.innerHTML = members.map(member => renderPerson(member, isLeader)).join('');
}

function RenderSessionDropdown() {
    if (!sessionDropdown) return;
    sessionDropdown.innerHTML = sessions.map(ses => `
        <a href="#" class="dropdown-item ${ses.current ? "current" : ""}" data-session="${ses.year}">
            <span class="dropdown-year">${ses.year}</span>
            <span class="dropdown-label">${ses.current ? "Current Session" : ""}</span>
        </a>
    `).join('');
    
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            session = item.dataset.session;
            if (currentSessionSpan) {
                currentSessionSpan.textContent = `ACADEMIC SESSION ${session}`;
            }
            document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("current"));
            item.classList.add("current");
            sessionButton.classList.remove("active");
            sessionDropdown.classList.remove("active");
            RenderWholeExecutive();
        });
    });
}

async function RenderWholeExecutive() {
    try {
        const response = await fetch('./executives.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const sessionData = await response.json();
        const sData = sessionData.find(s => s.year === session);

        if (!sData) {
            console.warn(`No data for session: ${session}`);
            if (leadershipCore) leadershipCore.innerHTML = "";
            if (executiveBoard) executiveBoard.innerHTML = "";
            return;
        }

        renderTeam(leadershipCore, sData.leaders, true);
        renderTeam(executiveBoard, sData.executiveMembers, false);
    } catch (error) {
        console.error("Failed to load executives data:", error);
    }
}

// EVENT LISTENERS
function setupEventListeners() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }

    if(sessionButton) {
        sessionButton.addEventListener("click", (e) => {
            e.stopPropagation();
            sessionButton.classList.toggle("active");
            if (sessionDropdown) sessionDropdown.classList.toggle("active");
        });
    }

    document.addEventListener("click", (e) => {
        if (sessionButton && !sessionButton.contains(e.target) && sessionDropdown && !sessionDropdown.contains(e.target)) {
            sessionButton.classList.remove("active");
            sessionDropdown.classList.remove("active");
        }
    });
}

// INITIALIZATION
function init() {
    RenderHeader(pageName);
    setupEventListeners();
    RenderSessionDropdown();
    RenderWholeExecutive();
    RenderFooter();
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

init();
