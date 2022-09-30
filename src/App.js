import {HashRouter} from "react-router-dom";
import Pages from "./pages/Pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";
import ReactGa from 'react-ga';


const TRACKING_ID = "G-3MXBZ44NE9";
ReactGa.initialize(TRACKING_ID);


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
