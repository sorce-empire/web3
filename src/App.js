import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from './component/Aboutpage/Aboutpage'
import Event from "./component/EventPage/Event";
import UnderDev from "./component/UnderDev/UnderDev";
import LandingPage from "./component/LandingPage/LandingPage";
import Terms from "./component/Term/Terms";
import GeneratorApp from "./component/Generator/GeneratorApp";
import WordApp from "./component/Words/WordApp";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/LandPage" element={<LandingPage/>}/>
          <Route path="/Aboutpage" element={<Aboutpage/>}/>
          <Route path="/Event" element={<Event/>}/>
          <Route path="/UnderDev" element={<UnderDev/>}/>
          <Route path="/Terms" element={<Terms/>}/>
          <Route path="/GeneratorApp" element={<GeneratorApp/>}/>
          <Route path="/WordApp" element={<WordApp/>}/>
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
