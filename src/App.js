import React, { useState } from 'react'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  // let isLoggedIn = false;
  // if(localStorage.getItem('password') === null)
  const [loggedIn, setLoggedIn] = useState(false)
  if (!loggedIn)
  {
    if(localStorage.getItem('password') === null || localStorage.getItem('password') === "")
      return <Login setLoggedIn = {setLoggedIn}/>
  }
    


  return (
      <div className="App">
        <Dashboard />
      </div>
    );
  
}
 
export default App;