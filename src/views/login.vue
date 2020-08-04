 <template>
    <div class="page">
      <div id="container">
        <form action="submit" @submit="login">
        <label for="input1">Email:</label>
        <input id= "input1" v-model="email" placeholder="Email" type="text" required>
        <br>
        <label for="input2">Password:</label>
        <input id="input2" v-model="password" placeholder= "Password" type= "password" name="password"
         required>
   <span class="reg"> Not registered? <router-link to="register">Register</router-link></span>
   <button type="submit" id="btn">Login</button>
   </form>
    </div>
  </div>
</template>
<style scoped>
.page {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  justify-items: center;
  margin-bottom: 0%;
  overflow-y: hidden;
}
#container {
  padding-top: 0%;
  padding-left: 0%;
  width: 40%;
  background-color: white;
  margin: auto;
  margin-top: 40px;
  padding-bottom: 4%;
}
form {
  margin-left: 10%;
  margin-top: 10%;
}
label {
  font-size: 30px;
}
input {
  width: 80%;
  font-size: 20px;
  padding: 15px;
  border-color: whitesmoke;
  border-top-color: none;
  margin-bottom: 20px;
  margin-left: 0px;
}
button {
  width: 87%;
  font-size: 25px;
  padding: 15px;
  color: white;
  background-color: green;
  border: 0px;
  border-radius: 5px;
  margin-left: 0px;
  margin-top: 10px;
}
@media screen and (max-width: 951px) {
  #container{
    width: 60%;
  } 
 
}
@media screen and (max-width: 460px){
  #container{
    width: 90%;
  }
 
}
@media screen and (max-width: 440px){
  #container{
    width: 100%;
  }
 
}
</style>
<script>
import {  auth } from '../db'
export default {
  props: ['id'],    
  data(){
    return {
      email: "",
      password: "", 
    }
  },
  methods: {
   login(e) {
     e.preventDefault()
        auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.$router.replace('/')
        })
      }
  }
  }
</script>