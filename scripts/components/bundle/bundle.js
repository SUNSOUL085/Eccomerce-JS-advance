
class Bundle extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<section id="popular-bundle">
        <div class="product-heading">
            <h3>popular Bunddle</h3>
            <!-- <span>All</span> -->
        </div>
        <product-list></product-list>
    </section>
    `;
    }
}

customElements.define('bundle-section', Bundle);
