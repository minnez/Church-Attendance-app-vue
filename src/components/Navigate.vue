<template>
  <nav>
        <header>
            <h1>Church</h1>
        </header>
        <div :class="{toggleclass : showNav}" class="navigation">
            <router-link to="/dashboard"><span>Dashboard</span> </router-link>
            <router-link to="/about"><span>Calender</span></router-link>
            <router-link to="/overview"><span>Attendance</span></router-link>
            <router-link to="/add_member"><span>Add a member</span></router-link>
            <button class="nav-btn nav-close-btn" @click="switchnav">close</button>
        </div>
        <button class="nav-btn" @click="switchnav">menu</button>
    </nav>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const showNav = ref(false)

        const switchnav = () =>{
            showNav.value = !showNav.value
            // console.log(showNav.value)
        }


        return { showNav, switchnav }
    }
}
</script>

<style scoped>
    nav .nav-btn {
        visibility: hidden;
        opacity: 0;
    }
    nav{
        border-right: 2px solid #eee;
        background-color: #fff;
        display: grid;
        grid-template-rows: 120px auto 40px;
    }
    header{
        color: #252591;
        padding: 20px 50px;
    }
    .navigation{
        background-color: transparent;
        position: static;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2;
    }
    .navigation a{
        position: relative;
        display: inline-block;
        width: 90%;
        margin: 0.2rem auto;
        padding: 15px 0;
        text-decoration: none;
        color: #bcbcbc;
        background-color: #fff;
        font-size: 1.2rem;
        border-radius: 7px;
        transition: all ease 0.3s;
    }

    .navigation a:hover{
        box-shadow: 2px 5px 10px #ddd;
        color: #4444fa;
    }
    .navigation a span{
        display: inline-block;
        width: 100%;
        padding: 3px 35px;
    }
    .navigation a span:hover{
        border-left: 3px solid #4444fa;
    }
    .navigation .church-active-link span{
        border-left: 3px solid #4444fa;
        color: #4444fa6f;
    }

@media screen and (max-width:700px) {
    nav .nav-btn{
        visibility: visible;
        opacity: 1;
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        background-color: #252591;
    }
    
    .navigation{
        background-color: #252591;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 1s;
        transform: translateX(-100vw);
    }
    .nav-close-btn{
        position: absolute ;
        top: 20px;
        right: 20px;
    }
    .toggleclass{
        transform: none;
    }
    header{
        color: #fff;
        padding: 20px 50px;
    }
    
    .navigation a{
        width: 50%;
        position: relative;
        display: inline-block;
        margin: 0.1rem auto;
        padding: 15px 0;
        text-decoration: none;
        color: #fff;
        background-color: transparent;
        font-size: 1.2rem;
        transition: all ease 0.3s;
    }

    .navigation a:hover{
        color: #4444fa;
        box-shadow: none;
        transition: linear 0.4s;
    }
    .navigation a span{
        display: inline-block;
        width: 100%;
        padding: 3px 35px;
    }
    .navigation a span:hover{
        border-left: 3px solid #4444fa;
    }
    .navigation .church-active-link span{
        border-left: 3px solid #4444fa;
        color: #8585f1;
    }
}
    

</style>