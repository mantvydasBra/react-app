import React from 'react';

const Login = () => {
      return (
        <div>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          {/*---- Include the above in your HEAD tag --------*/}
          <div className="wrapper fadeInDown">
            <div id="formContent">
              {/* Tabs Titles */}
              {/* Login Form */}
              <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" defaultValue="Log In" onClick = { () => console.log('Hey you pressed submit!')}/>
              </form>
            </div>
          </div>
        </div>
      );
  }

  export default Login;