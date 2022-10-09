<template>
      <!--Start breadcrumbs -->
    <span class="float-right py-4  breadcrumbs"><span class="mr-24" >{{this.$route.name}}</span></span>

    <v-breadcrumbs  class="breadcrumbs"   color="orange">
        <span class="ml-15">Home</span>
        <v-icon icon="mdi-chevron-right"></v-icon>
        <span>{{this.$route.name}}</span>
    </v-breadcrumbs>
<!--End breadcrumbs -->
</template>
<style scoped>

 .mr-24{
    margin-right: 68px;
 }
.breadcrumbs{
  background: #f9f9f9;
}
</style>