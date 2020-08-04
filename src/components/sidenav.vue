<template>
    <div class="sidenav" fluid>
       <div class="sid"><router-link to="/" id="router">Dashboard</router-link></div><hr>
        <div class="sid"><router-link to="/messages" id="router">Messages</router-link> </div><hr>
       <div class="sid"><router-link to="/reviews" id="router">Reviews</router-link> </div><hr>
       <div class="sid"><router-link to="/tasks" id="router">Tasks</router-link></div><hr>
       <div class="sid"><router-link to="/settings" id="router">Settings</router-link></div><hr>
       <div class="sid"><router-link to="/logout" id="router">Log Out</router-link></div> <hr>
       <div class="sid"><router-link to="/settings" id="router">Settings</router-link></div><hr>
    </div>
</template>
    <style scoped>
    #router{
        color: black;
    }
    #router:hover{
        color:yellowgreen;
    }
    .sidenav{
        height: 100%;
        width: 350px;
        background-color:white;
        padding-top: 20px;
        padding-left: 20px;
    }
    .sid{
        margin-top: 20px;
    }
    @media screen and (max-width: 249px) {
       .sidenav{ 
        display: flex;
        flex: 1;
       }   
    }
    </style>