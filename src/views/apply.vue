<template>
    <b-container class="form">
        <b-form>
        <b-form-group label="First Name"><b-form-input class="input-field" placeholder="e.g Henry stone" v-model="Name" type="text"></b-form-input> </b-form-group>
        <b-form-group label="E-Mail"> <b-form-input class="input-field" placeholder="you@example.com" v-model="email" type="text"></b-form-input></b-form-group> 
        <b-form-group label="Stack"><b-form-input v-model="skills" placeholder="e.g web developer, data science"  type="text"></b-form-input> </b-form-group> 
        <b-button @onclick="onClick()" class="btn">Apply</b-button></b-form> <b-button @click="logOut()">log out</b-button>
    </b-container>
</template>
<style scoped>
.btn{
    margin-left: 170px;
    width: 150px;
    background-color: blue;
}
.form{
    width: 600px;
    margin-top: 100px;
    background-color: beige;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
    padding-left: 40px;
    box-shadow:  5px 3px 15px rgba(0, 0, 0, 0.3);
}
</style>