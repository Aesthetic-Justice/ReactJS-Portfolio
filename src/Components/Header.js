import 'bulma/css/bulma.min.css';

const App = () => {
      return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="./IceCream192.png" width="28" height="28"/>
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu is-active">
                <div class="navbar-start">
                  <a class="navbar-item">
                    About Me
                  </a>
                  
                  <a class="navbar-item">
                    Contact Me
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Projects
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        
      )
  }
  
export default App;