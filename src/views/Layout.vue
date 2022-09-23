<template>
<v-app>
  <v-app-bar app color="#fff" light elevation="1" elevate-on-scroll style="padding:0px 190px">
    <Header />
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app >
    <Footer />
  </v-footer>
</v-app>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: { Footer, Header },
};
</script>
