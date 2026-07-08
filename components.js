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

        // Robust Active Link Highlighting (Ignores # hashes)
        const currentPath = window.location.pathname;
        const navLinks = this.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            
            // Checks if the paths match, ignoring any # tags at the end of the URL
            if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-content">
                    <img src="assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Frog Icon" style="max-width: 40px; filter: grayscale(100%) brightness(200%); opacity: 0.5;">
                    <ul class="footer-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="hire.html">Hire Me</a></li>
                        <li><a href="methodology.html">Methodology</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <p style="font-size: 0.9rem; opacity: 0.8;">&copy; ${new Date().getFullYear()} Carson Kane. Berlin, Germany.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);