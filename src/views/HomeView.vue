<template>
  <div class="home-main">
    <img class="home-image" src="../assets/Sandy.png" alt="illustration">
    <router-link to="/dashboard">Go to Dashboard</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-main{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 50px;
}
.home-main a{
    text-decoration: none;
    padding: 10px 25px;
    background-color: #4444fa;
    color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 5px #00000037;
    transition: all ease 0.3s;
}
.home-main a:hover{
    background-color: #3737b6;
    transition: all ease 0.3s;
}
.home-image{
  width: 70%;
}
</style>