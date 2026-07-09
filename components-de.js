class SiteHeaderDE extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="brand-container">
                    <a href="index.html" style="display: flex; align-items: center; gap: 1rem; text-decoration: none;">
                        <img src="../assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Carson Kane Brand Stamp" class="brand-logo">
                        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="brand-text">CARSON KANE</span>
                            <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: 400; font-family: 'Inter', sans-serif; display: none; margin-top: 3px;" class="desktop-tagline"> | Englischunterricht & Beratung</span>
                        </div>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Startseite</a></li>
                    <li><a href="hire.html">Leistungen</a></li>
                    <li><a href="methodology.html">Methodik</a></li>
                    <li><a href="contact.html">Kontakt</a></li>
                    <li style="margin-left: 1rem; border-left: 1px solid var(--border-subtle); padding-left: 1rem;">
                        <a href="../index.html">EN</a> <span style="color: var(--border-subtle)">|</span> <a href="index.html" style="color: var(--accent-primary); font-weight: 700;">DE</a> <span style="color: var(--border-subtle)">|</span> <a href="../es/index.html">ES</a>
                    </li>
                </ul>
            </nav>
        `;

        const currentPath = window.location.pathname;
        const navLinks = this.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath || (currentPath.endsWith('/de/') && linkPath.endsWith('/de/index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

class SiteFooterDE extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-content">
                    <img src="../assets/img/1de40967-0bdb-4b9b-9034-5113f59c5ee7.png" alt="Frog Icon" style="max-width: 40px; filter: grayscale(100%) brightness(200%); opacity: 0.5;">
                    <ul class="footer-nav">
                        <li><a href="index.html">Startseite</a></li>
                        <li><a href="hire.html">Leistungen</a></li>
                        <li><a href="methodology.html">Methodik</a></li>
                        <li><a href="contact.html">Kontakt</a></li>
                    </ul>
                    <p style="font-size: 0.9rem; opacity: 0.8;">&copy; ${new Date().getFullYear()} Carson Kane. Berlin, Deutschland.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeaderDE);
customElements.define('site-footer', SiteFooterDE);