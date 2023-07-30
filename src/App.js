import './App.css';
import { Avatar, Button, Link, TextField } from '@mui/material';
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button type='submit'>Search</Button>
      </form>
      <Avatar
  alt="Remy Sharp"
  src={user?.avatar_url}
  sx={{ width: 200, height: 200 }}
/>
<Link href={user?.blog} variant="body2">
  Linkedin
</Link>
{/* <Textarea>Followers : {user?.followers}</Text> */}
      

      <h1>{user?.bio}</h1>
    </div>
  );
}

export default App;
