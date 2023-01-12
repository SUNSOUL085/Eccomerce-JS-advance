// import '../category-list.js';

class Category extends HTMLElement {
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `<section id="category">
      <div class="category-heading">
          <h2>Category</h2>
          <span>All</span>

      </div>
      <div class="category-container">
          <category-list></category-list>
          
      </div>
  </section>`;
    }
  }
  customElements.define('cate-gory', Category);