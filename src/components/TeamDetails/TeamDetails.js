import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetails = (props) => {
    const { handleBanner } = props;
    const { idTeam } = useParams();
    const [teamDetails, setDetials] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setDetials(data.teams[0]))
            .catch(error => console.log(error));
    }, [teamDetails]);
    let { strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strSport, strDescriptionEN, strFacebook, strTwitter, strYoutube, strWebsite } = teamDetails;
    strWebsite = strWebsite || `https://en.wikipedia.org/wiki/${strTeam}`;
    strTwitter = strTwitter || `https://twitter.com/${strTeam}`;
    strYoutube = strYoutube || `https://youtube.com/${strTeam}`;
    strFacebook = strFacebook || `https://facebook.com/${strTeam}`;
    handleBanner(strTeamBadge);
    return (
        <div className="team-details">
            <div className="about-team">
                <div className="about-textSection">
                    <h2>{strTeam}</h2>
                    <div className="single-detail">
                        <span className="icon">

                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="text">Founded: {intFormedYear}</span>
                    </div>
                    <div className="single-detail">
                        <span className="icon">

                            <FontAwesomeIcon icon={faFlag} />
                        </span>
                        <span className="text">Country: {strCountry}</span>
                    </div>
                    <div className="single-detail">
                        <span className="icon">

                            <FontAwesomeIcon icon={faFutbol} />
                        </span>
                        <span className="text">Sport Type: {strSport}</span>
                    </div>
                    <div className="single-detail">
                        <span className="icon">

                            <FontAwesomeIcon icon={faVenusMars} />
                        </span>
                        <span className="text">Gender: {strGender}</span>
                    </div>

                </div>
                <div className="team-image">
                    {
                        strGender === "Male" &&
                        < img src={maleImage} alt={strTeam} />
                    }
                    {
                        (strGender === "Female" || strGender === "Mixed") &&
                        < img src={femaleImage} alt={strTeam} />
                    }
                </div>
            </div>
            <div className="team-description">
                {strDescriptionEN}
            </div>
            <hr />
            <div className="social-links">
                <a href={strWebsite}><FontAwesomeIcon className="social-icon" icon={faGlobe} /></a>
                <a href={strTwitter}><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
                <a href={strFacebook}><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                <a href={strYoutube}><FontAwesomeIcon className="social-icon" icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default TeamDetails;