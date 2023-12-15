// Register.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  async function register(e) {
    e.preventDefault();
    let item = { name, email, number, password };
    // console.log(item);
    
    fetch('https://blog-application-qiks.onrender.com/api/v1/auth/registerUser',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item)
    }).then((res)=>{
      // toast.success('Registered successfully')
      // alert('success')
      toast('login success')

      navigate('/login')
    }).catch((err)=>{
      toast.error('Failed :' +err.message)
      // alert('failed')
    })
  }
  
  return (
    <div className='register template d-flex justify-content-center align-items-center m-5 bg-white'>
      <div className='form_container p-5 rounded bg-black'>
        <form>
          <h3 className="text-center htext">Create Account</h3>
          <div className='mb-2 mt-3'>
            <label htmlFor="text">Name</label>
            <input type="text"
              placeholder='Name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='mb-2 mt-3'>
            <label htmlFor="email">Email</label>
            <input type="text"
              placeholder='E-mail'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <div className='mb-2 mt-3'>
            <label htmlFor="text">Phone Number</label>
            <input type="text"
              placeholder='Phone Number'
              className='form-control'
              onChange={(e) => setNumber(e.target.value)}
              value={number} />
          </div>
          <div className='mb-2 mt-3'>
            <label htmlFor="text">Password</label>
            <input type="password"
              placeholder='Password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <div className='d-grid mt-4'>
            <button className='btn btn-white' onClick={register} style={{ color: 'black', backgroundColor: '#a580c7' }}>Register</button>
          </div>
          <p className='text-center mt-4' style={{ color: 'white' }}>
            Already have an account? <Link to='/login' className='ms-2'>Signin</Link>
          </p>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;




    // try {
    //   let results = await fetch(' https://blog-application-qiks.onrender.com/api/v1/auth/registerUser', {
    //     method: 'POST',
    //     body: JSON.stringify(item),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //     },
    //   });
  
    //   if (!results.ok) {
    //     throw new Error(`HTTP error! Status: ${results.status}`);
    //   }
  
    //   results = await results.json();
    //   if (results.success) {
    //     localStorage.setItem("user-info", JSON.stringify(item));
    // navigate('/Login');
    //   } else {
    //     console.error('Registration failed:', results.message);
    //   }
      
    // } catch (error) {
    //   console.error('Error fetching data:', error.message);
    // }