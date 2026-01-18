export default function RenderHeader(pageName)
{
    const headerElem =  document.getElementById('header');
    if (!headerElem) return;
    headerElem.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between py-4">
                <!-- Logo -->
                <div class="flex items-center">
                    <div class="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                        <img src="mubasiceslogo.png" width=45>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center gap-8 header-nav" id="desktop-nav">
                    <a href="../home_page/index.html"  class="desktop-nav-element">Home</a>
                    <a href="../about_page/about.html"  class="desktop-nav-element">About</a>
                    <a href="../department_page/index.html"  class="desktop-nav-element">Our Department</a>
                    <a href="../executives_page/index.html" class="desktop-nav-element">Executives</a>
                    <a href="../innovations_page/innovations.html"  class="desktop-nav-element">Innovations</a>
                    <a href="../register_page/register"  class="desktop-nav-element">Register</a>
                    <a href="../contacts_page/contacts.html"  class="desktop-nav-element">Contact</a>
                </nav>

                <!-- Mobile Menu Button -->
                <button id="mobileMenuBtn" class="md:hidden p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

                <!-- Mobile Menu -->
            <nav id="mobileMenu" class="mobile-menu md:hidden">
                <a href="../home_page/index.html" class="mobile-nav-element">Home</a>
                <a href="../about_page/about.html" class="mobile-nav-element">About</a>
                <a href="../department_page/index.html" class="mobile-nav-element">Our Department</a>
                <a href="../executives_page/index.html" class="mobile-nav-element">Executives</a>
                <a href="../innovations_page/innovations.html" class="mobile-nav-element">Innovations</a>
                <a href="../register_page/register" class="mobile-nav-element">Register</a>
                <a href="#" class="mobile-nav-element">Contact</a>
            </nav>
        </div>
    
    `
    const desktopNavElem = document.getElementById('desktop-nav');
    if (desktopNavElem) {
        desktopNavElem.querySelectorAll('.desktop-nav-element').forEach((element) => {
            if (element.innerText === pageName) {
                element.classList.add('text-[#fe7701]');
                element.classList.remove('transition-colors');
            } else {
                element.classList.remove('text-[#fe7701]');
                element.classList.add('transition-colors');
            }
        })
    }

    const mobileMenuBtnElem = document.getElementById('mobileMenuBtn');
    const mobileNavElem = document.getElementById('mobileMenu');

    if (mobileNavElem) {
        // mark the current page inside mobile menu
        mobileNavElem.querySelectorAll('.mobile-nav-element').forEach((element) => {
            if (element.innerText === pageName) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    if (mobileMenuBtnElem && mobileNavElem) {
        mobileMenuBtnElem.addEventListener('click', ()=>{
            mobileNavElem.classList.toggle('active');
        });
    }

    // ensure mobile menu closes when switching to desktop widths
    try {
        const mq = window.matchMedia('(min-width: 768px)');
        const handleMq = (e) => {
            if (e.matches && mobileNavElem) {
                mobileNavElem.classList.remove('active');
            }
        };
        if (mq.addEventListener) mq.addEventListener('change', handleMq);
        else if (mq.addListener) mq.addListener(handleMq);
    } catch (err) {
        // ignore if matchMedia not supported
    }

    // console.log(mobileNavElem);


}
