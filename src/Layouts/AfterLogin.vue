<template>
    <div class="main">
        <Navigate/>
        <router-view></router-view>
        <Summary/>
    </div>
</template>
<script>
import Summary from "../components/Summary.vue"
import Navigate from "../components/Navigate.vue"
export default {
    components:{
        Navigate,
        Summary
    }
    
}
</script>
<style scoped>
 .main{
    margin: 0;
    padding: 0;
    height: 100vh;
 }
@media screen and (min-width: 700px) {
    .main{
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 250px auto;
    }
    .main .section-main{
        display: none;
    }
}
@media screen and (min-width: 1024px) {
    .main{
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 20% auto 23%;
    height: 100vh;
    }
     .main .section-main{
        display: grid;
    }
}


</style>