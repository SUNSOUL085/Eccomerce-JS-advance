
class Product extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<section id="popular-product">
        <div class="product-heading">
            <h3>popular product</h3>
            <span>All</span>
        </div>
        <product-list></product-list>
    </section>`;
    }
}

customElements.define('product-section', Product);

