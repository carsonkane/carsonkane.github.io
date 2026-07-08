class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="brand-container">
                    <a href="index.html" style="display: flex; align-items: center; gap: 1rem; text-decoration: none;">
                        <img src="assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Carson Kane Brand Stamp" class="brand-logo">
                        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="brand-text">CARSON KANE</span>
                            <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: 400; font-family: 'Inter', sans-serif; display: none; margin-top: 3px;" class="desktop-tagline"> | English Language Teaching & Consulting</span>
                        </div>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="hire.html">Hire Me</a></li>
                    <li><a href="methodology.html">Methodology</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        `;

        // Bulletproof Active Link Highlighting
        const currentUrl = window.location.href;
        const navLinks = this.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (link.href === currentUrl || (currentUrl.endsWith('/') && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}