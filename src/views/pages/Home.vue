<template>
 <div class="main-div">
    <h1 class="text-capitalize ">Free <span class="title">Learn From </span><br>Min Information & Technology</h1>
    <p>Free to learn with us and develop your skills to get a good job.Make your life happy with us.</p>
    <div class="d-flex justify-center  align-center flex-column flex-md-row fill-height">
    <v-btn  color="success"><v-icon start icon="mdi-play-circle"></v-icon> Learn On YouTube</v-btn>
    <v-btn color="warning" class="ml-3">Get Start <v-icon end icon="mdi-arrow-right-thin"></v-icon></v-btn>
    </div>

 </div>
</template>
<script>
export default {
    data:() =>({

    })
}
</script>
<style scoped>
.main-div{
    padding: 70px 32px;
    text-align: center;
}
.title{
    background: linear-gradient(to right, #42d392 ,#647eff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    
    
}
h1{
    font-size: 70px;
    font-weight: 900;
    text-shadow: 2px 7px 5px rgb(0 0 0 / 14%);
}
p{
    max-width: 960px;
    line-height: 1.5;
    color: var(--vt-c-text-2);
    transition: color .5s;
    font-size: 22px;
    margin: 24px auto 40px;
}

</style>