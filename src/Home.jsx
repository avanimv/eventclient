import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    axios.defaults.withCredentials=true;

    useEffect(()=>{
        axios.get('http://localhost:3001/home')
        .then(result=>{console.log(result)
            if(result.data !== "success"){
                // navigate('/login')
            }
            
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='bg-success' style={{width:"100%",height:"20vh"}}>
        <h1 className='text-light'><Link style={{textDecoration:"none"}} className='text-light' to={'/dashboard'}>Events</Link></h1>
        
    </div>
  )
}

export default Home