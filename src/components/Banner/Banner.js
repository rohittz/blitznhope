import React, { useEffect, useState } from 'react';
import './Banner.css'

const Banner = (props) => {
    const [presentLogo, setLogo] = useState("");
    useEffect(() => {
        setLogo(props.bannerImage);
    }, [props.bannerImage])
    return (
        <div className="banner">
            <div className="overlay">
                {
                    presentLogo &&
                    < div className="badgeImage">
                        <img src={presentLogo} alt="logo" />
                    </div>

                }
                <div className="league-name">
                    BlitznHope League
                </div>
            </div>
        </div >
    );
};

export default Banner;