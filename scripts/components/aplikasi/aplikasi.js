
class Aplikasi extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<section id="download-app">
        <div class="app-img">
            <img src="img/app2.jpg" alt="">
        </div>
        <!-- text -->
        <div class="download-app-text">

            <Strong>download app</Strong>
            <p>
                <h3>"recognize the lion by his claw, because the dogs bark sounds like lions roar"</h3> 
                <br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <!-- btn -->
            <div class="don-btn">
                <a href="#"><img src="img/don.png" alt=""></a>
                <a href="#"><img src="img/load.png" alt=""></a>
            </div>
        </div>
    </section>`;
    }
}

customElements.define('aplikasi-section', Aplikasi);

