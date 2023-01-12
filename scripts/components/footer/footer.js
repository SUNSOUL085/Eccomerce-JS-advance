
// import '../category-list.js';

class Footer extends HTMLElement {
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `<footer>
      <div class="container-footer">
        <!-- jelajah -->
        <a href="" class="logo"><span>e</span>Grocery
          </a>
        <div class="about">
          <h1 class="title">About</h1>
          <ul class="list">
            <li>About us</li>
            <li>Bantuan/FAQs</li>
            <li>Tim</li>
            <li>Kerjasama</li>
          </ul>
        </div>
        <div class="follow">
          <h1 class="title">Follow Us</h1>
          <ul class="list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
      </div>
      <div class="copyright">
        <hr>
        <h6>Our Team - 2022 All Right Reserved</h6>
      </div>
      </footer>`;
    }
  }
  customElements.define('foo-ter', Footer);