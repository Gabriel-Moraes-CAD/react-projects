import {BrowserRouter} from "react-router-dom";
import Pages from "./pages/Pages";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/nasa-pro">
        
        <Pages/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
