<template>
  <section class="section-main">
        <div class="admin">
            <span class="img"></span>
            <span>Muh. Bambing</span> 
            <span class="dowmmenu"></span>
        </div>
        <div class="summary">
            <h2 style="padding:0px 25px">
                Today's Attendance
            </h2>
            <span class="date">07 - July - 2022</span>
            <div class="total">
                <Attendance category="Total" number="304" />
            </div>
            <div class="men">
                <Attendance category="men" number="154" />
            </div>
            <div class="women">
                <Attendance category="women" number="150" />
            </div>
            <div class="officers">
                <Attendance category="officers" number="24" />
            </div>
        </div>
        <div class="newsfeed">
            
        </div>
    </section>
</template>

<script>
import Attendance from '@/components/Attendance.vue'
export default {
    components:{
        Attendance
    }

}
</script>

<style scoped>
.section-main{
    border-left: 2px solid #eee;
    display: grid;
    grid-template-rows: 80px auto auto;
}


.admin{
    border-bottom: 2px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
}
.admin .img{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #aaa;
    border-radius: 50%;
    margin: 0 15px;
}
.admin .dowmmenu{
    display: inline-block;
    height: 10px;
    width: 10px;
    border-right: 2px solid #888;
    border-bottom: 2px solid #888;
    transform: rotate(45deg);
    margin: 0 25px;
    cursor: pointer;
}
.summary{
    border-bottom: 2px solid #eee;
}
.summary>h2{
    margin-bottom: 0;
}
.date{
    color: #ccc;
    font-size: 0.9rem;
    padding: 0px 25px 25px 25px;
    display: inline-block;
}
</style>