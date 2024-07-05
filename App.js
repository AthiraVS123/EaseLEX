import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Components/login";
import Predictor from "./Pages/Predictor/Predictor";
import Game1_Instruct from "./Pages/Predictor/Game1-Instruct/index";
import Game1_Play from "./Pages/Predictor/Game1-Play/index";
import Game2_Instruct from "./Pages/Predictor/Game2-Instruct/index";
import Game2_Play from "./Pages/Predictor/Game2-Play/index";
import Game3_Instruct from "./Pages/Predictor/Game3-Instruct/index";
import Game3_Play from "./Pages/Predictor/Game3-Play/index";
import Game4_Instruct from "./Pages/Predictor/Game4-Instruct/index";
import Game4_Play from "./Pages/Predictor/Game4-Play/index";
import Game_Complete from "./Pages/Predictor/Game-complete/Complete";
import Welcome from "./Components/Welcome";
import Mainpage from "./Components/Mainpage";
import Pgmenu from "./Components/pgmenu";
import Audiobook from "./Components/audiobook";
import TTS from "./Components/tts";
import STT from "./Components/stt";
import EbookList from "./Components/ebooklist";
import EbookReader from "./Components/ebookreader";
import TextToSpeech from "./Components/texttospeech";
import Pg1 from "./Components/pg1";
import Pg2 from "./Components/pg2";
import Pg3 from "./Components/pg3";
import Pg4 from "./Components/pg4";
import Pg5 from "./Components/pg5";
function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/pgmenu" element={<Pgmenu />} />
          <Route path="/pg1" element={<Pg1 />} />
          <Route path="/pg2" element={<Pg2 />} />
          <Route path="/pg3" element={<Pg3 />} />
          <Route path="/pg4" element={<Pg4 />} />
          <Route path="/pg5" element={<Pg5/>} />
          <Route path="/audiobook" element={<Audiobook />} />
          <Route path="/ebooklist" element={<EbookList />} />
          <Route path="/ebookreader" element={<EbookReader />} />
          <Route path="/texttospeech" element={<TextToSpeech />} />
          <Route path="/tts" element={<TTS />} />
          <Route path="/stt" element={<STT />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/game1-instruct" element={<Game1_Instruct />} />
          <Route path="/game1-play" element={<Game1_Play />} />
          <Route path="/game2-instruct" element={<Game2_Instruct />} />
          <Route path="/game2-play" element={<Game2_Play />} />
          <Route path="/game3-instruct" element={<Game3_Instruct />} />
          <Route path="/game3-play" element={<Game3_Play />} />
          <Route path="/game4-instruct" element={<Game4_Instruct />} />
          <Route path="/game4-play" element={<Game4_Play />} />
          <Route path="/game-complete" element={<Game_Complete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
