// import logo from './logo.svg';
import './App.css';
import Explore from './Component/Explore';
import Last from './Component/Last';
import Main from './Component/Main';
import Mainfoot from './Component/Mainfoot';
import Participate from './Component/Participate';

function App() {

  
  return (
    <div className="App">
      <Main/>
      <Mainfoot/>
      <Participate/>
      <Explore/>
      <Last/>
    </div>
  );
}

export default App;
