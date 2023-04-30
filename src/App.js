import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import Career from './pages/Career';
import OnlineCourses from './pages/OnlineCourses';
import G1KnowledgePreparation from './pages/G1KnowledgePreparation';
import OnlineBeginnerDriverEducation from './pages/OnlineBeginnerDriverEducation';
import LocationPricingHome from './pages/LocationPricingHome';
import Pricings from './pages/Pricings';


function App() {
  return (
    <div className="App">

      <Router>

        <Navbar/>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/online-courses">
          <OnlineCourses/>
        </Route>

        <Route path="/g1-knowledge-preparation">
          <G1KnowledgePreparation/>
        </Route>

        <Route path="/online-beginner-driver-education">
          <OnlineBeginnerDriverEducation/>
        </Route>

        <Route path="/location-pricing">
          <LocationPricingHome/>
        </Route>

        <Route path="/pricings">
          <Pricings/>
        </Route>

        <Route path="/career">
          <Career/>
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
