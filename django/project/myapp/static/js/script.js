function initTailwind() {
    tailwind.config = {
        content: [],
        theme: {
            extend: {}
        }
    }
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function mobileMenu() {
    const nav = document.querySelector('nav');
    
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'md:hidden text-2xl';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.querySelector('div').appendChild(mobileBtn);

    const mobileMenuDiv = document.createElement('div');
    mobileMenuDiv.className = 'fixed inset-0 bg-black/95 hidden flex-col items-center justify-center gap-8 text-2xl font-medium z-50';
    mobileMenuDiv.innerHTML = `
        <a href="#" class="mobile-link">Work</a>
        <a href="#" class="mobile-link">Services</a>
        <a href="#" class="mobile-link">Studio</a>
        <a href="#" class="mobile-link">Journal</a>
        <a href="#" class="mobile-link">Contact</a>
    `;
    document.body.appendChild(mobileMenuDiv);

    let isOpen = false;

    mobileBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
            mobileMenuDiv.classList.remove('hidden');
            mobileMenuDiv.classList.add('flex');
        } else {
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuDiv.classList.add('hidden');
            mobileMenuDiv.classList.remove('flex');
        }
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuDiv.classList.add('hidden');
            mobileMenuDiv.classList.remove('flex');
            isOpen = false;
        });
    });
}

function navbarScroll() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-2xl', 'bg-black/95');
        } else {
            navbar.classList.remove('shadow-2xl', 'bg-black/95');
        }
    });
}

function heroAnimation() {
    const heroText = document.querySelector('h1');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTailwind();
    smoothScroll();
    mobileMenu();
    navbarScroll();
    heroAnimation();

    console.log('%cNEXUS Homepage Loaded Successfully ✨', 'color: #eab308; font-size: 14px; font-weight: bold');
});