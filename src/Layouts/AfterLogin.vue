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
    display: grid;
    grid-template-columns: 17% auto 23%;
    height: 100vh;
}

</style>