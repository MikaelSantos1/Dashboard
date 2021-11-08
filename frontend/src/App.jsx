
import './App.css';
import Navbar from './components/layout/Navbar';
import Rotas from './routes'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="wrap">
        <Rotas/>
      </div>
    </div>
  );
}

export default App;
