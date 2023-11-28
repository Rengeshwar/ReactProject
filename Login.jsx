import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import  { useState } from 'react';
import axios from 'axios';

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
  

  const [acc,setacc]=useState('');
  const [number,setnumber]=useState('');


  const navigate = useNavigate();



  const logg = (event) => {
    event.preventDefault();
    navigate('/');
  }


  const handleSubmit=(e)=>{
    console.log(number+" s");
    console.log(acc);
    e.preventDefault();
    if(Validate())
    {
      axios.get(" http://localhost:3017/users")
      .then(result=>{
        result.data.map(user=>{
          if(user.Accno===acc)
          {
            if(user.Password===number)
            {
    navigate('/Home')
            alert("Succesfull LOGIN")
            return(<><p>good</p></>)
            }
            else{
              alert("Wrong Password or email");
            }
          }
          else{
            alert("Wrong Password or email");
          }
         
        })
      })
    }
    
    
    
    }
    
const Validate=()=>{
  let result=true;
  if(acc===''||acc===null)
  {
      result=false;
      console.log('name enter'); 
  }
  
  if(number===''||number===null)
  {
      result=false;
      console.log('enter pass ');
  }
  return result;
}




  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'white', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> Login Page
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Account No"  value={acc} onChange={e=>setacc(e.target.value)} style={inputStyle} ></input>

          <br></br>
          <br></br>
          <input type="password" placeholder="PIN" value={number} onChange={e=>setnumber(e.target.value)} style={inputStyle}></input>

          <br></br>
          <a href="k" style={atag}>
            <b>forgot password?</b>
          </a>

          <br></br>
          <br></br>
          <button style={BStyle} type='submit' >
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
