// Team Members
const teamMembers = [
    { name: "Alex Rivera", role: "Founder & Creative Director", emoji: "👨‍🎨" },
    { name: "Sophia Chen", role: "Head of Design", emoji: "👩‍🎨" },
    { name: "Marcus Okoro", role: "Lead Developer", emoji: "👨‍💻" },
    { name: "Elena Voss", role: "Strategy & Brand", emoji: "👩‍💼" }
];

// Values Data
const values = [
    {
        icon: "fas fa-lightbulb",
        title: "Curiosity First",
        desc: "We ask better questions to create better solutions."
    },
    {
        icon: "fas fa-handshake",
        title: "Human Centered",
        desc: "Technology should serve people, not the other way around."
    },
    {
        icon: "fas fa-infinity",
        title: "Craftsmanship",
        desc: "Every pixel and interaction is intentional."
    }
];

// Render Team
function renderTeam() {
    const container = document.getElementById('team-grid');
    container.innerHTML = teamMembers.map(member => `
        <div class="text-center card-hover group">
            <div class="w-40 h-40 mx-auto bg-zinc-800 rounded-3xl flex items-center justify-center text-7xl mb-6 transition-transform group-hover:scale-110">
                ${member.emoji}
            </div>
            <h3 class="font-semibold text-xl">${member.name}</h3>
            <p class="text-yellow-400">${member.role}</p>
        </div>
    `).join('');
}

// Render Values
function renderValues() {
    const container = document.getElementById('values-grid');
    container.innerHTML = values.map(value => `
        <div class="card-hover bg-zinc-900 p-10 rounded-3xl">
            <i class="${value.icon} text-4xl text-yellow-400 mb-6"></i>
            <h3 class="text-2xl font-semibold mb-3">${value.title}</h3>
            <p class="text-gray-400">${value.desc}</p>
        </div>
    `).join('');
}

// Navbar Scroll Effect
function navbarScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('bg-black/95', 'shadow-2xl');
        } else {
            nav.classList.remove('bg-black/95', 'shadow-2xl');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderValues();
    navbarScroll();
    
    console.log('%cNEXUS About Page Loaded ✨', 'color: #eab308; font-size: 14px;');
});