import { useState } from 'react';
import '../Components/StyeleFooter.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

 async function login(e){
  e.preventDefault();
  console.log(email,password);
  try{
    const response=await fetch('https://blog-application-qiks.onrender.com/api/v1/auth/login',{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json',
      }
    })
    if(!response.ok){
      throw new Error('HTTP error! Status: ${response.status');
    }
    const result=await response.json();
    if(result.success){
      localStorage.setItem('token',(result.token))
      localStorage.setItem('role',(result.role))
      localStorage.setItem('user',JSON.stringify(result.data))
      toast('login success')
  navigate('/')

    }else{
      console.error('Login failed',result.message);
    }
  }catch(error){
    console.log('Error fetching data',error)
  }
 }
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-vh m-5 rounded bg-white'>
      <div className='form_container p-5 rounded bg-black'>
      <form>
        <h3 className="text-center mt-3 htext">LogIn</h3>
        <div className='mb-2 mt-3'>
          <label htmlFor="email">Email</label>
          <input type="text" 
          placeholder='E-mail' 
          className='form-control'
          onChange={(e)=>setEmail(e.target.value)} 
          value={email}/>
        </div>
        <div className='mb-2 mt-3'>
          <label htmlFor="password">Password</label>
          <input type="password" 
          placeholder='Password' 
          className='form-control'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
        </div>
        <div className='d-grid mt-4'>
          <button className='btn btn-white' onClick={login} style={{color:'black', backgroundColor:'#a580c7'}}>LogIn</button>
        </div>
        <p className='text-center mt-4' style={{color:'white'}}>
          Don't have an account?<Link to='/register' className='ms-1'>Register</Link>
        </p>
      </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
