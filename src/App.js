import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import "./styles/reset.scss";
import "./styles/styles.scss";


function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;