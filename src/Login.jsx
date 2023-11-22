import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const Login = () => {
  const backimg = {
    backgroundImage: 'url("https://global.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/4X/1/6/7/16715033dc824de4f5e3f26566516e8a7804ab63.jpeg")',
   // backgroundColor:'grey',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

 
  
    
  const BStyle = {
    backgroundColor: 'grey',
    borderRadius: '6px',
    color: 'white',
    cursor: 'pointer',
  };
  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '8px',
    borderWidth: '07px',
    borderColor: '#333',
  };
  const atag = {
    paddingLeft: '130px',
    color: '#333',
  };
  

  

  const navigate = useNavigate();



  const logg = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'white', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> Login Page
        </h2>
        <form>
          <input type="text" placeholder="Enter Account No" style={inputStyle} ></input>

          <br></br>
          <br></br>
          <input type="password" placeholder="PIN"  style={inputStyle}></input>

          <br></br>
          <a href="k" style={atag}>
            <b>forgot password?</b>
          </a>

          <br></br>
          <br></br>
          <button style={BStyle} onClick={logg} >
            <b>
              <h3>Login</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
