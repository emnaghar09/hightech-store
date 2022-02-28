import Home from './components/home'
import Footer from './components/footer'
import NavBar from './components/Navbar'
import Contact from './components/contact'
import Cart from './products/Cart'
import Details from './products/details'
import {products} from './products/listproduct'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import "./responsive.css";


function App() {
  return (
    <div className="App">
     
     <Router>
        <NavBar />
        <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Courses" component={Cart} />
        <Route path="/Contact" component={Contact} />
        <Route path='/Details/:id' render ={(props)=><Details {...props} Liste={products} />} />
               {/* <Route path='/Details/:id' render ={(props)=><Details {...props} Liste={courseslist} />} /> */}
               </Switch>
        </div>
<Footer/>
      </Router> 
    </div>
  );
}

export default App;
