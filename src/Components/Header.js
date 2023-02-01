import 'bulma/css/bulma.min.css';
import { Outlet } from 'react-router-dom';
import Nagivation from './Navigation';

const bgStyle = {
  backgroundImage: 
  "url('./Assets/IMG_3357.png')",
  position:'fixed',
  top:0,
  right:0,
  width:`100vw`,
  zIndex:`-1`,
  height:`100vh`,
  backgroundSize:`cover`,
  backgroundRepeat: `repeat-y`
};

const App = () => {
  return (
    <main>
      <section className="hero is-dark">
        <div className="hero-body pt-3" style={{ width: "100vw" }}>
          <div>
            <a href="./">
              <img className='mb-4' alt='Site Logo' src="./Assets/nameSig.png" />
            </a>
            <Nagivation />
          </div>
        </div>
      </section>
      <div style={bgStyle}>
      </div>
        <Outlet />
    </main>
  )
}

export default App;