<template>
        <v-btn link :to="'/'" color="#fff" class="logo">MIN <span class="it ml-3"> IT</span></v-btn>
          <v-spacer/>
            <v-list class="d-flex align-center subheading">
              <v-list-item link  v-for="(menu,index) in menus" :key="index" :to="menu.url">
                <v-list-item-title>{{menu.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-spacer/>
            <v-btn class="ma-2" variant="outlined" color="success" link :to="'login'"><v-icon start icon="mdi-login"  ></v-icon>Login</v-btn>
            <v-btn class="ma-2" variant="outlined" color="warning" link :to="'registration'"> <v-icon start icon="mdi-account-plus" ></v-icon>Register</v-btn>
          
    
</template>
<script>
export default {
   data: () => ({
    
      menus:[
        {title:"Services" , url:'services'},
        {title:"Skills Development" , url:'skills-development'},
        {title:"Jobs & Career" , url:'jobs-and-career'},
        {title:"Book Store" , url:'book-store'},
        {title:"Islamic" , url:'islamic'},
        {title:"Free Learn" , url:'free-learn'}
        ]
    }),
   
}
</script>
<style scoped>
.logo{
  text-shadow: 2px 3px 3px rgb(0 0 0 / 30%);
    background: linear-gradient(to right, #42d392 ,#647eff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
}
.it{
    background: linear-gradient(to right, #42d392 ,#647eff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
</style>