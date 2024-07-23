import './styles/App.css';
import {TopArea} from './components/TopArea';
import {BodyArea} from './components/BodyArea';
import {BottomArea} from './components/BottonArea';

function App() {
  return (
   <div className='App'>
        <div id="site">
          <TopArea/>
          <BodyArea/>
          <BottomArea/>
      </div>
   </div>
  );
}

export default App;
