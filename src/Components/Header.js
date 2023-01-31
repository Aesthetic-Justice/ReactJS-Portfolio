import 'bulma/css/bulma.min.css';
import Nagivation from './Navigation';

const App = () => {
  return (
    <section class="hero is-dark">
      <div class="hero-body" style={{ width: "100vw" }}>
        <div>
          <a href="./">
            <img alt='Site Logo' src="./nameSig.png" />
          </a>
          <Nagivation />
        </div>
      </div>
    </section>
  )
}

export default App;