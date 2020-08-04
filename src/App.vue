<template>
  <div class="body red">
    <div class="contain">
    <div class="white__bg">
      <form @submit.prevent="register">
        <input v-model="body.email" placeholder="Email">
        <input v-model="body.name" placeholder="Full Name">
        <button> Apply</button>
        </form>
    </div>
        
    </div>
    <div class="contain">
    <div class="white__bg">
      <div class="item" v-for="(person, i) in users" :key="i"> 
        <span>{{person.name}}</span>
        <button class="del__btn" @click="del(person._id)">Delete</button>
      </div>
    </div>
        
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {  
  data() {
    return {
      body: {
        email: '',
        name: '',
        phone: '0000000000',
        password: 'mmmmmmmmmmmmm',
        accountType: 'user'
      }
    }
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
  register() {
    const regApiUrl = "http://localhost:3000/api/v1/users/register-user", vueApp = this;
    vueApp.$post(regApiUrl, vueApp.body, vueApp, () => {this.$store.dispatch('getUserDetails', {vueApp})})
  },
  del(id) {
    alert(id)
    let config;
    this.$Delete("http://localhost:3000/api/v1/users/delete-users",
    {_id: id},
    config,
    () => {this.$store.dispatch('getUserDetails', {vueApp})})
  }
  },
};
</script>
<style>
body{
  background-color: #f1f1f1;
}
.body {
  font-family: 'PT Serif', serif;
  display: flex;
  height: 100vh;
}
.contain{
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.white__bg{
  background-color: #ffffff;
  border-radius: 10px;
  width: 300px;
  margin: auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);

}
form{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
input{
  padding: 5px;
  margin-bottom: 10px;
}
button{
  padding: 5px;
}
.item{
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  margin: 4px;
}
.del__btn{

}
</style>

