import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const title_1 = {
    letterSpacing: '30px',
    color: 'black',
    fontSize: '30px',
    backgroundColor: 'darkBrown',
    fontFamily: 'roboto',
  };

  return (
    <div>
      <div style={title_1}>
        <FontAwesomeIcon icon={faUniversity} style={{ marginRight: '10px' }} />
        <b>Sky Bank</b>
      </div>

      
    </div>
  );
};

export default Home;
