import React from 'react'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/footer'
import About from './About/About'
import Home from './Home/home'
import {Product,Flags,Backdrop,Advsidplay,Umbrella,Qstand,Counter,Printing,Promotional} from './Product/Product'
import Contact from './Contact/Contact'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" index element={<Home />}/>
            <Route path="*" element={<Home />}/>
            <Route path="/Product" element={<Product />}/>
            <Route path="/Flags" element={<Flags/>}/>
            <Route path="/Backdrop" element={<Backdrop/>}/>
            <Route path="/Advd" element={<Advsidplay/>}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Umbrella" element={<Umbrella />}/>
            <Route path="/Qs" element={<Qstand />}/>
            <Route path="/Counter" element={<Counter />}/>
            <Route path="/Printing" element={<Printing />}/>
            <Route path="/Promotional" element={<Promotional />}/>

            {/* routing to seperate page is given here,ProdDetail*/}

            

        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
























/*
  import {useState} from 'react';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(event, num) {
    setCount(count + num);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>
        event is used here to call another function

        first the jsx element function is called and inside that a props named handleClick is called and as the props using event tag
        the handleClick function is passed along with params
      <Child handleClick={event => handleClick(event, 100)} />
    </div>
  );
}


*/