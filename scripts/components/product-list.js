import './product-item.js';


class ProductList extends HTMLElement {
  set products(pro) {
    this._products = pro;
    this.render();
    console.log('prolis tjlaan')
  }
 
  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = '';
    this._products.forEach(product => {
      const productItemElement = document.createElement('product-item');
      productItemElement.product = product;
      
      this.appendChild(productItemElement);
    });
  }
}
 
customElements.define('product-list', ProductList);