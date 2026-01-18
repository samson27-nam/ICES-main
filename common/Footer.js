export default function RenderFooter()
{
    const footer = document.getElementById("footer");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-montserrat fold-bold">
            <div class="text-[#fe7701] text-[1.2rem] mb-5 font-semibold">
                <h3 class="mb-4">About ICES</h3>
                <p class="text-white/80 text-sm">
                    Innovation in Civil Engineering Society is dedicated to fostering
                    excellence in civil engineering education and research.
                </p>
            </div>
            <div class="text-[#fe7701] text-[1.2rem] mb-4 font-semibold">
                <h3 class="mb-4">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="index.html" class="text-white/80 hover:text-[#fe7701] transition-colors">Home</a></li>
                    <li><a href="#" class="text-white/80 hover:text-[#fe7701] transition-colors">About</a></li>
                    <li><a href="../executives_page/index.html" class="text-white/80 hover:text-[#fe7701] transition-colors">Executives</a></li>
                    <li><a href="#" class="text-white/80 hover:text-[#fe7701] transition-colors">Contact</a></li>
                </ul>
            </div>

            <div class="text-[#fe7701] text-[1.2rem] mb-4 font-semibold">
                <h3 class="mb-4">Connect With Us</h3>
                <div class="flex flex-col gap-4 mb-8 text-sm">
                    <a href="https://www.tiktok.com/@mubas.ices" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-[#fe7701] no-underline flex items-center gap-2 transition-colors duration-300"><img src="tiktok.svg" class="w-5 h-5 mr-2"> TikTok</a>
                    <a href="https://www.linkedin.com/company/mubas-ices/" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-[#fe7701] no-underline flex items-center gap-2 transition-colors duration-300"><img src="linkedin.svg" class="w-5 h-5 mr-2"> LinkedIn</a>
                    <a href="https://www.instagram.com/mubas.ices/" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-[#fe7701] no-underline flex items-center gap-2 transition-colors duration-300"><img src="instagram-svgrepo-com.png" class="w-5 h-5 mr-2"> Instagram</a>
                </div>
            </div>
            <div class="text-[#fe7701] text-[1.2rem] mb-5 font-semibold">
                <h3 class="mb-4">Contact Us</h3>
                <p class="text-white/80 text-sm">
                    Innovation In Civil Engineering Society<br>
                    Email: <a href="mailto:mubasices@gmail.com">mubasices@gmail.com</a><br>
                    Phone: <a href="tel:+265 997 726 410">+265 997 726 410</a>
                </p>
            </div>
        </div>
        <div class="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            ©${currentYear} <span id="currentYear"></span> Innovation in Civil Engineering Society. All rights reserved.
        </div>
    
    `
}