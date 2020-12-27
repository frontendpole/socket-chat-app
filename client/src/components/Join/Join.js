import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.scss';

const Join = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="Join--outerContainer">
      <div className="Join--innerContainer">
        <h1 className="heading">Join chat</h1>
        <div><input type="text" placeholder="Name" className="Join--input" onChange={(e) => setName(e.target.value)} /></div>
        <div><input type="text" placeholder="Room" className="Join--input mt-20" onChange={(e) => setRoom(e.target.value)} /></div>
        <Link onClick={(e) => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
          <button className="Join--button mt-20" type="submit">join</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;