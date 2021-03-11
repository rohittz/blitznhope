import React, { useEffect } from 'react';
import './Teamlist.css'
import Team from '../Team/Team';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import TeamDetails from '../TeamDetails/TeamDetails';
import App from '../../App';
const Teamlist = (props) => {
    const { teamList, handleBanner } = props;
    handleBanner("");
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/teams/:idTeam">
                        <TeamDetails handleBanner={handleBanner}></TeamDetails>
                    </Route>
                    <React.Fragment>
                        <div className="teamlist">
                            {
                                teamList.map(team => <Team key={team.idTeam} team={team || {}}></Team>)
                            }
                        </div>
                    </React.Fragment>
                </Switch>
            </Router>
        </div>
    );
};

export default Teamlist;