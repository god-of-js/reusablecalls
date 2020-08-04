<template>
  <div class="page">
    <div id="container">
      <form action="submit" @submit="signUp" >
        <label for="input-1">Email</label>
        <input id="input-1" v-model="email" placeholder="Email" type="text" required />
        <label for="input-2">Username</label>
        <input id="input-2" v-model="username" placeholder="Username" type="text" required />
        <label for="input-3">Stack</label>
        <input id="input-3" v-model="stack" placeholder="stack" type="text" required />
        <label for="input-4">Password</label>
        <input id="input-4" v-model="password" placeholder="Password" type="password" required />
        <br />
        <button id="btn" type="submit" >Sign up As An Employee</button>
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
  #container {
    width: 60%;
  }
  } 
  @media screen and (max-width: 460px) {
  #container {
    width: 90%;
  }
  }
  @media
 screen and (max-width: 440px) {
  #container {
    width: 100%;
  }
  }
</style>
<script>
import { db, auth } from "../db";
export default {
  name: "register",
  props: ["id"],
  data() {
    return {
      email: null,
      username: null,
      password: null,
      stack: null
    };
  },
  methods: {
    signUp(e) {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(this.email, this.password).then(data => {
          const userId = data.user.uid;
          db.collection("users")
            .add({
              name: this.username,
              stack: this.stack,
              userId: userId
            })
            .then(() => {
                const userData = {
                  name: this.name,
                  stack:this.stack
                }
                this.$store.commit('setUser', userData );
            })
          this.$router.push("/")
        });
    }
  }
};
</script>