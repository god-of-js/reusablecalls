<template>
    <div class="row container">
        <div class="col card row">
            <span class=" txt">Completed<br>Projects</span>
             <span class="lilcard"></span>
        </div>
        <div class="col card row">
            <span class=" txt">Accepted<br>Bids</span>
             <span class="lilcard"></span></div>
        <div class="col card row">
            <span class=" txt">Amount <br>Earned</span>
             <span class="lilcard"></span></div>
    </div>
</template>
<style scoped>
.txt{
    margin-top: 30px;
}
@media  screen and (max-width: 799px) {
    .container{
        display: flex;
        flex: 1;
    }
    .card{
         display: flex;
        flex: 1;
    }
}
.lilcard{
    margin-top: 20px;
 height: 90px;
 background-color: whitesmoke; 
}
.card{
    width: 30px;
    display: flex;
    justify-content: space-between;
    height: 120px;
    background-color: white;
    margin: 10px;
}
.container{
    width: 800px;
    margin-left: 0%;
    margin-right: 50px;
}
</style>
<script>
export default {
}
</script>

