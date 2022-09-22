import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <main>
      <Router>
      <Home />
      </Router>
      </main>
    </div>
  );
}

export default App;
