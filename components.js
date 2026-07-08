class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="brand-container">
                    <a href="index.html" style="display: flex; align-items: center; gap: 1rem;">
                        <img src="assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Carson Kane Brand Stamp" class="brand-logo">
                        <span class="brand-text">CARSON KANE - English Language Teaching & Consulting</span>
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