
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Purchase from './components/Purchase.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main-container'>
        <Header />
        <Purchase />
      </div>
    </div>
  );
}

export default App;
