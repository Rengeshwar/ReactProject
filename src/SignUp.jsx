import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


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
  const navigate = useNavigate();

  const atag = {
    paddingLeft: '130px',
    color: 'blue',
    
  };

  const[name,setname]=useState('');
  const[number,setnumber]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[acc,setacc]=useState('');


  const exist=()=>{
    navigate('/Login');
  }




  const handleSubmit=async()=>{
    try
    {
      navigate('/Login');
      const response = await axios.post("http://localhost:3017/users",{
        Name:name,
        Number:number,
        Email:email,
        Password:password,
        Accno:acc,
  });
    }
  catch(error)
  {
  console.error('this is a error',error)
    }
  }
  

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'black', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name :"  style={inputStyle} value={name} onChange={e=>setname(e.target.value)}  required></input>
          <br></br>
          <input type="email" placeholder="Enter Email ID :" style={inputStyle} value={email} onChange={e=>setemail(e.target.value)} required></input>
          <br></br>
          <input type="text" placeholder="Enter Contact No :" style={inputStyle} value={number} onChange={e=>setnumber(e.target.value)}  required></input>
          <br></br>
          <input type="text" placeholder="Enter Acc No :" style={inputStyle}  value={acc} onChange={e=>setacc(e.target.value)} required></input>
          <br></br>
          <input type="password" placeholder="Set Password :"  style={inputStyle}   value={password} onChange={e=>setpassword(e.target.value)} required></input>
          <br></br>
          <input type="password" placeholder="Confirm Password :"  style={inputStyle} required></input>
          <br></br>
          <a href="k" style={atag} onClick={exist}>
            <b>Existing User?</b>
          </a>
          <br></br>
          <br></br>
          <button style={BStyle} type='submit' >
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
