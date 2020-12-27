import React from 'react';
import './InfoBar.scss';
import closeIcon from '../../icons/times-solid.svg';

const InfoBar = ({ room }) => (
  <div className="InfoBar">
    <div className="InfoBar--leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="InfoBar--rightInnerContainer">
      <a href="/"><img className="closeIcon" src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
)

export default InfoBar;