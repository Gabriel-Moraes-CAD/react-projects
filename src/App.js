import {HashRouter} from "react-router-dom";
import Pages from "./pages/Pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Pages/>
    
      </HashRouter>
    </div>
  );
}

export default App;
