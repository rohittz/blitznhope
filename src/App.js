import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Teamlist from './components/Teamlist/Teamlist';

function App() {
  document.body.style = "background: linear-gradient(315deg, #2b4162 0%, #12100e 74%)";
  const [allTeams, setTeamList] = useState([]);
  const [BannerLogo, setLogo] = useState("");
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data => setTeamList(data.teams))
      .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Banner bannerImage={BannerLogo} />
      <Router>
        <Switch>
          {/* Most of the useful routes are in Teamlist.js */}
          <Teamlist handleBanner={setLogo} teamList={allTeams} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
