import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">

      <Router>

        <Navbar/>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/online-courses">
          
        </Route>

        <Route path="/location-pricing">
          
        </Route>

        <Route path="/career">
          
        </Route>

        <Route path="/blogs">
          
        </Route>

        <Route path="/contact-us">
          <ContactUs/>
        </Route>
      
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
