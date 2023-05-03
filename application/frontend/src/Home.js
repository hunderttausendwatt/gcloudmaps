import React, { useEffect, useState, useCallback, useRef } from 'react';
import './index.css';
import FileComponent from './Changelog';


const Home = () => {

    return (
            <div>
            <div className="container">
                <div className="component">
                    gcloud maps<sup class="superscript">by Tobias Lindert</sup>
                </div>
               <div className="about">
                    <a class="info-button" href="/">Go back</a>
               </div>
            </div>
        
        <div className="info-content">
                <div className="info-image">
                  <h3>Architecture:</h3>
                  <img
      src="images/architecture.svg"
    />
                </div>
                <div className="info-text">
                <h3> About Me:</h3>
                  <p>Hey there! I'm a Cloud Data Engineer with a passion for tackling complex challenges through the power of cloud technologies. In the rare event of a global network apocalypse, you'll catch me shredding up fresh powder in the Alps, kitesurfing across my local lake, or whipping up a scrumptious eggplant lasagna for my friends to enjoy as we ride out the digital storm.
                  </p>
                </div>
        </div>
        </div>
            );
}


export default () => (
      <Home/>
  );