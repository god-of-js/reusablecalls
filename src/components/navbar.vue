<template>
    <div class="bodydiv">
        <div class='div'>
            <span>HireDev</span>
<ul class="uldiv">
            <li class="lis">Dashboard</li>
            <li class="lis" >Projects </li>
            <li class="lis">Messages</li>
        </ul>
        </div>
        <hr>
        <ul>
            <li class="li"><router-link class="route" to="/home">Graphics & design</router-link></li>
            <li class="li"><router-link class="route" to="/profile">Digital Marketing</router-link></li>
            <li class="li"><router-link class="route" to="/projects">Programming & Tech</router-link></li>
            <li class="li"><router-link class="route" to="/projects">Business</router-link></li>
            <li class="li"><router-link class="route" to="/projects">Lifestyle</router-link></li>
            <li class="li"><router-link class="route" to="/projects">Writing & Translation</router-link></li>
        </ul>
        <hr>
    </div>
</template>
<style scoped>
.bodydiv{
    margin-bottom:0%;
}
.div{
    display: flex;
}
.uldiv{
    margin-left: 70%;
    margin-bottom: 0px;
}
ul{
    display: flex;
    list-style: none;
    justify-items: right;
    background-color:white;
    margin-top: 0%;
    padding-top: 1%;
}
@media screen and (max-width: 1108) {
    .lis{
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 0%; 
    }
    hr{
    width: 100%;
}
}
span{
    margin-left: 3%;
}
@media screen and (max-width: 1296) {
    .lis{
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 0%; 
    }
    .uldiv{
        margin-left: 50%;
    }
    hr{
    width: 100%;
}
}
hr{
    width: 100%;
    color: whitesmoke;
}
.li{
    margin-left: 2%;
    margin-right: 2%;
    margin-top: -1%;
    margin-bottom: -1%;
}
.lis{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0%;
}

.route{
    color:grey;
}
span{
    padding-top: 1%;
}
</style>
