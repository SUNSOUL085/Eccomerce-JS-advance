// import './product-item.js';


class CategoryList extends HTMLElement {
    
    connectedCallback(){
        const cat = [{
            img : 'img/c1.png',
            name : 'sword'
        },
        {
            img : 'img/c2.png',
            name : 'armor'
        },
        {
            img : 'img/c3.png',
            name : 'shield'
        },
        {
            img : 'img/c4.png',
            name : 'spear'
        },
        {
            img : 'img/c5.png',
            name : 'helm'
        },
        {
            img : 'img/c6.png',
            name : 'spell'
        },
        ];
        this._cate = cat;
        this.render();
        console.log('category jalan')
      }
 
 
  render() {
    this.innerHTML = '';
    this._cate.forEach(cat => {
      const catItemElement = document.createElement('category-item');
      catItemElement.innerHTML = `<a href="" class="category-box">
      <img src="${cat.img}" alt="">
      <span>${cat.name}</span>
  </a>`;
      
      this.appendChild(catItemElement);
    });
  }
}
 
customElements.define('category-list', CategoryList);