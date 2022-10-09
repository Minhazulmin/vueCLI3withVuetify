<template>
<v-app>
  <v-app-bar app color="#fff" light elevation="3" elevate-on-scroll >
    <Header />
  </v-app-bar>
  <v-main>
      <Breadcrumbs />
    <v-container-fluid>
      <router-view></router-view>
    </v-container-fluid>
  </v-main>

  <v-footer app >
    <Footer />
  </v-footer>
</v-app>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: { Footer, Header,Breadcrumbs },
  data(){
    return{
       
    }
  },

};
</script>
