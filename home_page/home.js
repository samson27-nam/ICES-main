import RenderHeader from "../common/Header.js";
import RenderFooter from "../common/Footer.js";

// GLOBAL DATA
const pageName = "Home";
let slideIndex = 0;
let slideTimer;

// DOM ELEMENTS
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const studentTab = document.getElementById('studentTab');
const adminTab = document.getElementById('adminTab');
const studentForm = document.getElementById('studentForm');
const adminForm = document.getElementById('adminForm');
const studentLoginTab = document.getElementById('studentLoginTab');
const adminLoginTab = document.getElementById('adminLoginTab');
const studentLoginForm = document.getElementById('studentLoginForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const innovationCards = document.querySelectorAll(".innovation-card");
const commentForm = document.querySelector("#commentForm");
const commentList = document.querySelector("#commentList");
const uploadForm = document.querySelector("#uploadForm");
const execCards = document.querySelectorAll(".exec-card");
const quoteElement = document.getElementById("quote");
const slideshowContainer = document.querySelector('.slideshow-container');
const eventsGrid = document.getElementById('events-grid');

// UTILITIES
function validateRegistrationForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
}

function showSlidesAuto() {
    slideIndex++;
    showSlides();
    slideTimer = setTimeout(showSlidesAuto, 5000); // Change slide every 5 seconds
}

// SLIDESHOW FUNCTIONALITY
function initializeSlideshow() {
    showSlides();
    showSlidesAuto();
}

// SMOOTH SCROLL FOR ANCHOR LINKS
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// TOUCH SWIPE SUPPORT FOR SLIDESHOW
function initializeSwipeSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    function handleGesture() {
        const slides = document.getElementsByClassName("slide");
        if (touchEndX < touchStartX && touchStartX - touchEndX > 50) {
            // Swipe left - next slide
            slideIndex = (slideIndex % slides.length) + 1;
        }
        if (touchEndX > touchStartX && touchEndX - touchStartX > 50) {
            // Swipe right - previous slide
            slideIndex = slideIndex <= 1 ? slides.length : slideIndex - 1;
        }
        showSlides();
    }

    if (slideshowContainer) {
        slideshowContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slideshowContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture();
        });
    }
}

// GLOBAL NAVIGATION (Mobile Menu)
function initializeNavigation() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// REGISTRATION PAGE TABS & POST
function initializeRegistrationTabs() {
    if (studentTab && adminTab && studentForm && adminForm) {
        studentTab.addEventListener('click', () => {
            studentTab.classList.add('active');
            adminTab.classList.remove('active');
            studentForm.classList.add('active');
            adminForm.classList.remove('active');
        });

        adminTab.addEventListener('click', () => {
            adminTab.classList.add('active');
            studentTab.classList.remove('active');
            adminForm.classList.add('active');
            studentForm.classList.remove('active');
        });

        function handleTabVisibility() {
            const tabButtons = document.querySelector('.tab-buttons');
            if (!tabButtons) return;
            tabButtons.style.display = (window.innerWidth >= 992) ? 'none' : 'flex';
        }

        window.addEventListener('load', handleTabVisibility);
        window.addEventListener('resize', handleTabVisibility);
    }
}

// REGISTRATION POST (Student)
function setupRegistrationForm() {
    if (studentForm) {
        studentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                fullName: studentForm.fullName.value,
                regNumber: studentForm.regNumber.value,
                email: studentForm.email.value,
                password: studentForm.password.value,
                yearOfStudy: studentForm.yearOfStudy.value
            };

            try {
                const res = await fetch('http://localhost:5000/api/auth/register/student', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                alert(result.message || "Registration successful!");
                studentForm.reset();
            } catch (err) {
                console.error(err);
                alert("Error registering. Check console.");
            }
        });
    }
}

// LOGIN PAGE TABS & POST
function initializeLoginTabs() {
    if (studentLoginTab && adminLoginTab && studentLoginForm && adminLoginForm) {
        studentLoginTab.addEventListener('click', () => {
            studentLoginTab.classList.add('active');
            adminLoginTab.classList.remove('active');
            studentLoginForm.classList.add('active');
            adminLoginForm.classList.remove('active');
        });
        adminLoginTab.addEventListener('click', () => {
            adminLoginTab.classList.add('active');
            studentLoginTab.classList.remove('active');
            adminLoginForm.classList.add('active');
            studentLoginForm.classList.remove('active');
        });
    }
}

// LOGIN POST (Student)
function setupStudentLoginForm() {
    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                email: studentLoginForm.email.value,
                password: studentLoginForm.password.value
            };
            try {
                const res = await fetch('http://localhost:5000/api/auth/login/student', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                if (res.ok) window.location.href = 'student-dashboard.html';
                else alert(result.message || "Login failed!");
            } catch (err) {
                console.error(err);
                alert("Error logging in. Check console.");
            }
        });
    }
}

// LOGIN POST (Admin)
function setupAdminLoginForm() {
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                email: adminLoginForm.email.value,
                password: adminLoginForm.password.value
            };
            try {
                const res = await fetch('http://localhost:5000/api/auth/login/admin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                if (res.ok) window.location.href = 'admin-dashboard.html';
                else alert(result.message || "Login failed!");
            } catch (err) {
                console.error(err);
                alert("Error logging in. Check console.");
            }
        });
    }
}

// INNOVATIONS PAGE FUNCTIONALITY
function initializeInnovationCards() {
    innovationCards.forEach(card => {
        const toggleBtn = card.querySelector(".toggle-details");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                card.classList.toggle("expanded");
            });
        }
    });
}

function setupCommentForm() {
    if (commentForm && commentList) {
        const savedComments = localStorage.getItem("ices_comments");
        if (savedComments) commentList.innerHTML = savedComments;

        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const comment = document.querySelector("#comment").value.trim();
            if (name && comment) {
                const commentItem = document.createElement("div");
                commentItem.classList.add("comment");
                commentItem.innerHTML = `<strong>${name}</strong>: ${comment}`;
                commentList.appendChild(commentItem);
                localStorage.setItem("ices_comments", commentList.innerHTML);
                commentForm.reset();
            } else alert("Please enter both your name and comment.");
        });
    }
}

function setupUploadForm() {
    if (uploadForm) {
        uploadForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("✅ Your innovation idea has been submitted for review. Thank you!");
            uploadForm.reset();
        });
    }
}

// EXECUTIVES PAGE FUNCTIONALITY
function initializeExecutiveCards() {
    execCards.forEach(card => {
        const readMoreBtn = card.querySelector(".read-more");
        if (readMoreBtn) {
            readMoreBtn.addEventListener("click", () => {
                card.classList.toggle("expanded");
            });
        }
    });
}

function initializeQuoteRotation() {
    if (quoteElement) {
        const quotes = [
            "Leadership is service, not position.",
            "Innovation distinguishes between a leader and a follower.",
            "Great leaders inspire others to lead.",
            "Success is built on teamwork and vision."
        ];
        let quoteIndex = 0;
        function rotateQuotes() {
            quoteElement.textContent = quotes[quoteIndex];
            quoteIndex = (quoteIndex + 1) % quotes.length;
        }
        rotateQuotes();
        setInterval(rotateQuotes, 6000);
    }
}

// ROLE REGISTRATION FORM
function initializeRoleSelection() {
    const radios = document.querySelectorAll('input[name="role"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            document.getElementById('student-fields').style.display = radio.value === 'student' ? 'block' : 'none';
            document.getElementById('admin-fields').style.display = radio.value === 'admin' ? 'block' : 'none';
        });
    });
}

//UPDCOMING EVENTS FUNCTIONALITY
async function loadUpcomingEvents() {
     try {
        const response = await fetch('./events.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const events = await response.json();
        //const sData = sessionData.find(s => s.year === session);

        if (!events) {
            console.warn(`No upcoming events data found.`);
            if (eventsGrid) eventsGrid.innerHTML = "";
            return;
        }

        
        events.forEach(event => { eventsGrid.innerHTML += `
            <div class="event-card">
                <img src="images/${event.image}" alt="${event.title}" class="event-image">
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
                    <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <p>${event.description}</p>
                    <a href="register.html" class="event-button">Register Now</a>
                </div>
            </div>`; });
    } catch (error) {
        console.error("Failed to load upcoming events data:", error);
    }
}

// EVENT LISTENERS
function setupEventListeners() {
    initializeNavigation();
    initializeRegistrationTabs();
    setupRegistrationForm();
    initializeLoginTabs();
    setupStudentLoginForm();
    setupAdminLoginForm();
    initializeInnovationCards();
    setupCommentForm();
    setupUploadForm();
    initializeExecutiveCards();
    initializeQuoteRotation();
    initializeRoleSelection();
    loadUpcomingEvents();
}

// INITIALIZATION
function init() {
    RenderHeader(pageName);
    RenderFooter();
    initializeSmoothScroll();
    initializeSwipeSupport();
    initializeSlideshow();
    setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
