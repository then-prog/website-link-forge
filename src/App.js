import AssetFindrLandingPage from "demos/AssetFindrLandingPage.js";
import DigiSpectLandingPage from "demos/DigiSpectLandingPage.js";
import ChallengeLandingPage from "demos/ChallengeLandingPage.js";
import ChallengeRegister from "demos/ChallengeRegister.js";
import LeaderBoardPage from "demos/LeaderBoardPage.js";
import PrivacyPolicy from "pages/PrivacyPolicyV2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrequentlyAskedQuestions from "pages/FrequentlyAskedQuestions.js";
import DigispectUpgradePlan from "pages/DigispectUpgradePlan.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetFindrLandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/digispect" element={<DigiSpectLandingPage />} />
        <Route path="/challenge" element={<ChallengeLandingPage />} />
        <Route path="/challenge-register" element={<ChallengeRegister />} />
        <Route path="/challenge-tv" element={<LeaderBoardPage />} />
        <Route path="/faq/delete-account" element={<FrequentlyAskedQuestions />} />
        <Route path="/upgrade-digispect" element={<DigispectUpgradePlan />} />
      </Routes>
    </Router>
  );
}

export default App;
