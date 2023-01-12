class Jumbotron extends HTMLElement {
    connectedCallback(){
      this.render();
    }
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
    get value() {
      return this.querySelector('#searchElement').value;
    }

    render() {
      this.innerHTML = `<section id="search-banner">
      <!-- bg -->
      <img src="img/strom2.jpg" class="bg1" alt="">
      <div class="search-banner-text">
          <h1>We Bow For No One</h1>
          <strong>#UnlessForQueen</strong>
          <form action="" class="search-box">
              <input type="text" class="search-input" placeholder="Make a Wish" name="search" id="searchElement">
              <input type="button" value="Search" class="search-btn" id="searchButtonElement">

          </form>
      </div>
  </section>`;
  this.querySelector('.search-btn').addEventListener('click', this._clickEvent);
    }
    
  }
  customElements.define('jumbo-tron', Jumbotron);