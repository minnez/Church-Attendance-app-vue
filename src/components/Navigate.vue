<template>
  <nav>
        <header>
            <h1>Church</h1>
        </header>
        <div class="navigation">
            <router-link to="/dashboard"><span>Dashboard</span> </router-link>
            <router-link to="/about"><span>Calender</span></router-link>
            <router-link to="/overview"><span>Attendance</span></router-link>
            <router-link to="/add_member"><span>Add a member</span></router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    border-right: 2px solid #eee;

    display: grid;
    grid-template-rows: 120px auto;
}
header{
    color: #252591;
    padding: 20px 50px;
}
.navigation{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2;
}
.navigation a{
    position: relative;
    display: inline-block;
    width: 90%;
    margin: 0.1rem auto;
    padding: 15px 0;
    text-decoration: none;
    color: #bcbcbc;
    font-size: 1.2rem;
    border-radius: 7px;
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

</style>