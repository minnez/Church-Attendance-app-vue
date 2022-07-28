<template>
  <div class="login">
    <div class="login-banner">
      <div class="logo">The Church</div>
      <div class="welcome">
        <h1>Become a member with us.</h1>
        <p>Join the church of Jesus. Be baptised and be saved.</p>
      </div>
      <div class="message-card">
        <div class="message">Give and it shall be given unto you. A good measure pressed down.</div>
        <div class="profile">
          <div class="img">
            <img src=""  alt="">
          </div>
          <div class="name">
            <span>James Mckeown</span>
            <span>President</span>
          </div>
        </div>
      </div>
    </div>

    <div class="login-form">
      <form @submit.prevent="">
        <p>Login</p>
        <div class="to-register">Don't have an account? <router-link to="/register">Register</router-link></div>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="type your email" 
          id="email"
          required>
        <label for="login-password">Password</label>
        <input
          type="password"
          placeholder="type your password"
          id="login-password"
          required>
        <input type="submit" value="Login">
      
      <div class="small message-card">
        <div class="message">Give and it shall be given unto you. A good measure pressed down.</div>
        <div class="profile">
          <div class="img">
            <img src=""  alt="">
          </div>
          <div class="name">
            <span>James Mckeown</span>
            <span>President</span>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>


<script>

export default {

}
</script>

<style>
*{
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.login{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.login-banner{
  display: none;
}
.login-form{
  padding: 20px;
  background-color: #fff;
  margin: auto;
  width: 90%;
}
.login-form p{
  font-size: 24px;
  font-weight: 700;
  color: #4444fa;
  margin: 15px 0px;
}
.login .to-register{
  font-size: 14px;
  margin: 15px 0px;
  font-weight: 400;
  color: #000;
}
.to-register a{
  text-decoration: none;
  color: #4444fa;
}
.login label{
  display: block;
  color: #888;
  font-size: 14px;
  margin: 30px 0px 8px 0px ;
  letter-spacing: 1px;
} 
.login input{
  display: block;
  width: 90%;
  color: #000;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 12px;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
  outline: none;
}
.login input::placeholder{
  color: #ddd;
}
.login input:active,.login input:focus{
  border: 1px solid #4444fa;
  box-shadow: 1px 1px 5px #8b8bf67a ;

}
.login input[type=submit]{
  background-color: #4444fa;
  color: #fff;
  font-weight: 400;
  padding: 8px 28px;
  width: fit-content;
  letter-spacing: 1px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.338);
  cursor: pointer;
}
.login input[type=submit]:hover{
  background-color: #5353fb;
}
.message-card{
  width: 80%;
  margin: auto;
  font-size: 14px;
}
.small{
  width: 90%;
  max-width: 300px;
  margin-top: 40px;
  padding: 20px;
  border-radius: 5px;
  background-color: #4444fa;
  color: #fff;
}
.message-card .message{
  padding: 8px;
}
.message-card .profile{
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 10px;
}
.message-card .img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #bbb;
}
.message-card .name{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
@media  screen and (min-width:700px) {
  .login{
    padding: 8px;
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .login-banner{
    max-width: 400px;
    display: grid;
    grid-template-rows: 10% 60% 30%;
    background-color: #4444fa;
    color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.338);
  }
  .login-banner .logo{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .login-banner .welcome{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    font-weight: 200;
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .login-banner .welcome p{
    color: #ccc;
    width: 75%;
    font-size: 18px;
    font-weight: lighter;
  }
  .message-card{
    font-size: 18px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #1b1b7793;
    color: #fff;

  }
  .small{
    display: none;
  }
  


.login-form{
  padding: 20px;
  background-color: #fff;
  margin: auto;
  width: 100%;
}
.login-form p{
  font-size: 24px;
  font-weight: 700;
  color: #4444fa;
  margin: 15px 0px;
}
.login .to-register{
  font-size: 18px;
  margin: 25px 0px;
  font-weight: 400;
  color: #000;
}
.to-register a{
  text-decoration: none;
  color: #4444fa;
}
.login label{
  display: block;
  color: #888;
  font-size: 18px;
  margin: 40px 0px 40px 0px ;
  letter-spacing: 1px;
} 
.login input{
  display: block;
  width: 90%;
  max-width: 500px;
  color: #000;
  border: 1px solid #ccc;
  padding: 14px;
  font-size: 24px;
  border-radius: 5px;
  margin-bottom: 40px;
}
}
</style>