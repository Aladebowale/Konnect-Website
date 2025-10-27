import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Konn3ct LP";
import FeaturesPage from "./Components/Konn3ct FP";
import CustomerPage from "./Components/Konn3ctCustomer";
import PricingPage from "./Components/Kpricing";
// import Kpricing from "./Components/PriceP1";

import AboutUs from "./Components/Konn3ctAbout";
import Changelog from './Components/Konn3ctChangeL';
import Konn3ctTC from "./Components/Konn3ctTerms";
import Konn3ctPP from "./Components/KonnectPolicy";
import Konn3ctDevs from "./Components/Konn3ctDevs";

// import Konn3ctFooter from "./Components/Konn3ct 4";
// import BoxGrid from "./Components/hold";

// import combineApp from "./Components/combine";



const App = () => {
  return (
    <div>
       <Router>
        <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/Meet' element={<LandingPage />} />
      <Route path='/Features' element={<FeaturesPage />} />
      <Route path='/Customers' element={<CustomerPage />} />
      <Route path='/Pricing' element={<PricingPage />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/ChangeLog' element={<Changelog />} />
      <Route path='/Konn3ctTC' element={<Konn3ctTC />} />
      <Route path='/Konn3ctPP' element={<Konn3ctPP />} />
      <Route path='/Konn3ctDevs' element={<Konn3ctDevs />} />

         </Routes>
       </Router> 

    

      {/* <LandingPage/> */}
      {/* <FeaturesPage/> */}
      {/* <CustomerPage/> */}
      {/* <Kpricing/>
          <PricingPage/> */}
          {/* <AboutUs/> */}
        

          

      {/* <Konn3ctFooter /> */}    
      {/* <BoxGrid/> */}
    

      {/* <combineApp/> */}
      
 {/* <Konn3ctFooter /> */}
      {/* <Kpricing/> */}
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
