import { Route, Routes } from "react-router-dom";
import Aviation from "./components/Aviation";
import Defence from "./components/Defence";
import LandingPage from './components/LandingPage';
import SubComponents from './components/SubComponents';
import WhoWeAre from "./components/WhoWeAre";
import Connect from "./components/Connect";
import Missiles from "./components/Missiles";
import Warships from "./components/Warships";
import Guns from "./components/Gun";
import Helicopters from "./components/Helos";
import SubMarines from "./components/SubMarine";
import Radars from "./components/Radar";
import FighterJets from "./components/FighterJet";
import TrainerJets from "./components/Trainer";
import Others from "./components/Other";
import Artillery from "./components/Artillery";
import AD from "./components/AD";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wwa" element={<WhoWeAre />} />
        <Route path="/defence" element={<Defence />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/sub" element={<SubComponents />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/missiles" element={<Missiles />} />
        <Route path="/ads" element={<AD />} />
        <Route path="/warships" element={<Warships />} />
        <Route path="/guns" element={<Guns />} />
        <Route path="/helos" element={<Helicopters />} />
        <Route path="/subs" element={<SubMarines />} />
        <Route path="/radars" element={<Radars />} />
        <Route path="/fighters" element={<FighterJets />} />
        <Route path="/trainers" element={<TrainerJets />} />
        <Route path="/others" element={<Others />} />
        <Route path="/artillery" element={<Artillery />} />
      </Routes>
    </>
  );
}

export default App;
