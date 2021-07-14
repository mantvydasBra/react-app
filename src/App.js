import React, { useState } from 'react'; 
import Login from './components/Login';
 
function App() {
  // let isLoggedIn = false;
  const [loggedIn, setLoggedIn] = useState(false)
  if (!loggedIn)
    return <Login setLoggedIn = {setLoggedIn}/>

  return (
      <div className="App">
        <h1>You made it!</h1>
      </div>
    );
  
}
 
export default App;