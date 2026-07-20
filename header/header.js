// Setup Scroll Listener for dynamic header transition & ScrollSpy
function setupScrollListener() {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Select all sections that correspond to navigation links
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(section => section !== null);

    if (!header) return;

    function handleHeaderScroll() {
        const scrollPosition = window.scrollY;

        // 1. HEADER BG TRANSITIONS
        if (scrollPosition > 20) {
            header.classList.remove('bg-transparent', 'border-transparent');
            header.classList.add(
                'bg-white/40', 
                'dark:bg-black/40', 
                'backdrop-blur-md', 
                'border-b', 
                'border-zinc-200/20', 
                'dark:border-zinc-800/20'
            );
        } else {
            header.classList.add('bg-transparent', 'border-transparent');
            header.classList.remove(
                'bg-white/40', 
                'dark:bg-black/40', 
                'backdrop-blur-md', 
                'border-b', 
                'border-zinc-200/20', 
                'dark:border-zinc-800/20'
            );
        }

        // 2. SCROLLSPY ACTIVE STATE DETECTOR
        let currentActiveSectionId = 'welcome'; // Default fallback

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset accounts for header height
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        // Toggle active styles on header links based on the active ID
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1); // strips the '#' symbol
            if (targetId === currentActiveSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Run once on initial load to highlight correctly
    handleHeaderScroll();

    // Listen to real-time scroll events
    window.addEventListener('scroll', handleHeaderScroll);
}

// Setup themes, mobile menu toggles, and dynamic SMOOTH SCROLLING
function setupHeaderInteractivity() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Force 'light' mode by default on fresh visit
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
        htmlElement.classList.remove('dark');
        updateThemeIcon('light');
    } else {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            htmlElement.classList.add('dark');
            updateThemeIcon('dark');
        } else {
            htmlElement.classList.remove('dark');
            updateThemeIcon('light');
        }
    }

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun text-lg';
        } else {
            themeIcon.className = 'fa-solid fa-moon text-lg';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });

    // Mobile Navigation Controls
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // ====================================================
    //  SMOOTH SCROLL ENGINE FOR LINK CLICKS (ALL PAGES)
    // ====================================================
    function smoothScrollTo(targetSelector, offset = 90) {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) return;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Triggers the elegant slide animation instead of the jump!
        });
    }

    // Bind smooth scrolling to Desktop Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the default instant jump
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // Bind smooth scrolling to Mobile Navigation Links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the default instant jump
            mobileMenu.classList.add('hidden'); // Close dropdown menu
            
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };
}
