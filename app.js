// Function to load external HTML files asynchronously
async function loadHTML(elementId, filepath) {
    try {
        const response = await fetch(filepath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
            return true;
        } else {
            console.error(`Failed to load ${filepath}:`, response.statusText);
            return false;
        }
    } catch (error) {
        console.error(`Error fetching ${filepath}:`, error);
        return false;
    }
}

// Function to dynamically load and initialize the header interactivity script
function loadHeaderScript() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'header/header.js';
        script.onload = () => {
            setupHeaderInteractivity();
            setupScrollListener();
            resolve();
        };
        script.onerror = () => {
            console.error("Failed to load header/header.js");
            resolve();
        };
        document.body.appendChild(script);
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load all structural HTML templates
    await Promise.all([
        loadHTML('header-container', 'header/header.html'),
        loadHTML('welcome-container', 'welcome/welcome.html'),
        loadHTML('about-container', 'about/about.html'),
        loadHTML('services-container', 'services/services.html'),
        loadHTML('works-container', 'works/works.html'),
        loadHTML('tools-container', 'tools/tools.html'),
        loadHTML('contacts-container', 'contacts/contacts.html'),
        loadHTML('footer-container', 'footer/footer.html')
    ]);

    // 2. Load interactive scripts
    await loadHeaderScript();
    
    // Load the works script so openGallery() is defined globally
    const worksScript = document.createElement('script');
    worksScript.src = 'works/works.js';
    document.body.appendChild(worksScript);

    // 3. Fade out preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-fade-out');
        }, 1500); 
    }
});