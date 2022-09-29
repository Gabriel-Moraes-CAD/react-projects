 import { HashRouter } from 'react-router-dom'
import Pages from "./pages/Pages";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <HashRouter>
        
        <Pages/>
    
      </HashRouter>
    </div>
  );
}

export default App;
