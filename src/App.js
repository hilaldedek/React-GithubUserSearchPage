import './App.css';
import { Avatar, Button,TextField} from '@mui/material';
import { useState } from 'react';

function App() {
  const[input,setInput]=useState("");
  const[user,setUser]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const getUser=async function(){
      const url=`https://api.github.com/users/${input}`;
      const res= await fetch(url);
      const data=await res.json();
      setUser(data)
      console.log(data);
    }
    getUser();
  
  }
  return (
    <div className="App" style={{backgroundColor:"#331D2C",color:'#EDE4FF',fontFamily:"Raleway"}}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',marginTop:24}}>
        <TextField value={input} placeholder='Username' onChange={(e)=>setInput(e.target.value)} style={{width:'50%',position:'relative',backgroundColor:"#A78295",margin:'auto'}} />
        <div style={{marginTop:24}} >
          <Button type='submit' style={{width:"25%",position:'relative',margin:'auto',backgroundColor:"#A78295",color:'#EDE4FF'}}>Search</Button>
        </div>
        
      </form>
      {
        user.message==="Not Found" ? <h1 style={{textShadow:" 6px 6px 0px rgba(0,0,0,0.8)"}}>User not found</h1> : ""
        
      }
      <h1 style={{color:'#EDE4FF',fontFamily:"Raleway",fontSize:'4rem',textShadow:" 6px 6px 0px rgba(0,0,0,0.8)"}}>{user?.name}</h1>
      {
        user.avatar_url && <Avatar
  alt="Remy Sharp"
  src={user.avatar_url} style={{position:'relative',margin:'auto'}}
  sx={{ width: 200, height: 200 }}
/>
      }
      {/* {
        user.blog &&<Link href={user?.blog} target="_blank">
  Linkedin
</Link>
      } */}
      <h1 style={{textShadow:" 6px 6px 0px rgba(0,0,0,0.8)"}}>{user.bio}</h1 >
     { user.followers && <h3 style={{textShadow:" 6px 6px 0px rgba(0,0,0,0.8)"}}>{user.followers} followers</h3>}
      {user.following && <h3 style={{textShadow:" 6px 6px 0px rgba(0,0,0,0.8)"}}>{user.following} following</h3>}

    </div>
  );
}

export default App;
