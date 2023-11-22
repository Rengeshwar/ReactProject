import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const backimg = {
   // backgroundColor:'grey',
   // backgroundImage: 'url("https://vsthemes.org/uploads/posts/2017-09/1582033799_money-heist_vsthemes_ru-16.webp")',
  backgroundImage:'url("https://banwo-ighodalo.com/assets/grey-matter/90f0860e3476ab3b271fd8d608253ef4.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //borderRadius:'100% 100%',
  };

  const BStyle = {
    backgroundColor: 'black',
    borderRadius: '6px',
    color: 'white',
    cursor: 'pointer',
  };

  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '6px',
    borderWidth: '12px',
    borderColor: 'skyBlue',
  };

  const atag = {
    paddingLeft: '130px',
    color: 'blue',
  };

  
  const navigate = useNavigate();



  const logg = (event) => {
    event.preventDefault();
    navigate('/Login');
    
  };

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'black', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          Sign Up
        </h2>

        <form>
          <input type="text" placeholder="Enter Name :" style={inputStyle}  required></input>
          <br></br>
          <input type="text" placeholder="Enter Email ID :" style={inputStyle} required></input>
          <br></br>
          <input type="text" placeholder="Enter Contact No :" style={inputStyle} required></input>
          <br></br>
          <input type="email" placeholder="Enter Acc No :" style={inputStyle} required></input>
          <br></br>
          <input type="password" placeholder="Set Password :"  style={inputStyle} required></input>
          <br></br>
          <input type="password" placeholder="Confirm Password :"  style={inputStyle} required></input>
          <br></br>
          <a href="k" style={atag}>
            <b>Existing User?</b>
          </a>
          <br></br>
          <br></br>
          <button style={BStyle} onClick={logg}>
            <b>
              <h3>Sign Up</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
