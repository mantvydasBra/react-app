import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
      const email = useFormInput('');
      const password = useFormInput('');

      const handleLogin = () => {
        if (email.value === "test" && password.value === "test123")
        {
          alert("You are an admin!");
          setLoggedIn = true;
        }
        else
        {
          alert("bye bye!");
        }
      }

      return (
        <div>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
          {/*---- Include the above in your HEAD tag --------*/}
          <div className="wrapper fadeInDown">
            <div id="formContent">
              {/* Tabs Titles */}
              {/* Login Form */}
              <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" {...email} />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" {...password}/>
                <button type="submit" className="button" onClick={() => handleLogin()} children='CLICK'>Log In</button>
              </form>
            </div>
          </div>
        </div>
      );
  }

  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  export default Login;