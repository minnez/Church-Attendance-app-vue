<template>
  <section class="section">
    <div class="icon"></div>
    <div class="info">
        <div class="category">{{category}}</div>
        <div class="number">{{number}}</div>
    </div>
  </section>
</template>

<script>
export default {
    props:['category', 'number']

}
</script>

<style scoped>
.section{
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 10px 25px;
    box-shadow: 1px 1px 10px #4b4b4b1a;
    border-radius: 8px;
    margin: 5px;
}
.icon{
    width: 40px;
    height: 40px;
    background-color: #b0d7f6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.category{
    color: #bbb;
}
.number{
    font-size: 1.4rem;
    color: #4444fa;
    letter-spacing: 2px;
}

</style>