class Client extends HTMLElement {
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `<section id="client">
      <div class="client-heading">
          <h3>What you say</h3>
      </div>
      <!-- box container -->
      <div class="client-box-container">
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/bg.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Kylo ren</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/vader.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Darth Vader</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/vader.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Darth Vader</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/bg.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Kylo ren</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/bg.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Kylo ren</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          <div class="client-box">
              <!-- profile -->
              <div class="client-profile">
                  <img src="img/bg.jpg" alt="client">
                  <div class="profile-text">
                      <strong>Kylo ren</strong>
                      <span>Sith</span>
                  </div>
              </div>
              <div class="rating">
                  <span>4.5</span>
              </div>
              <!-- isi -->
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
          </div>
          
          

      </div>
  </section>`;
    }
  }
  customElements.define('client-section', Client);