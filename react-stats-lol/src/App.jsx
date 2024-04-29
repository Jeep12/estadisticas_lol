import './App.css';
import { Menu } from './components/Nav/Nav';
import { InputPlayer } from './components/InputPlayer/InputPlayer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <Menu />
      <div className='wrapper-home'>
        <div className='logo'>
          <img className='champ' src={require('./images/9jxE2.gif')} alt="loading..." />
        <img className='logoImg' src={require('./images/logo.png')} alt="loading..." />

        </div>
        <div className='information'>
        </div>

      </div>
      <InputPlayer />
    </div>
  );
}

export default App;
