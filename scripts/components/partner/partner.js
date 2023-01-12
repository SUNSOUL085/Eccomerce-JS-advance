class Partner extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<section id="partner">
        <div class="partner-heading">
            <h3>Our trusted</h3>
        </div>
        <div class="logo-container">
            <img src="img/logo1.png" alt="logo">
            <img src="img/logo2.png" alt="logo">
            
            <img src="img/GOT.png" alt="logo" class="lo2">
            <img src="img/logo5.png" alt="logo">
            <img src="img/logo4.png" alt="logo">
        </div>
    </section>`;
    }
}

customElements.define('partner-section', Partner);

