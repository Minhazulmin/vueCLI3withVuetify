<template>
      
  <v-container>
  <!--Start breadcrumbs -->
    <v-title class="float-right text-h6 py-3  breadcrumbs"><span class="mr-5" >Skills Development</span></v-title>
    <v-breadcrumbs :items="breadcrumbs" class="breadcrumbs"   color="orange">
        <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
    </v-breadcrumbs>
  <!--End breadcrumbs -->
  </v-container>
</template>
<script>
export default {
    data() {
        return{
             breadcrumbs: [
                    {
                    title: "Home",
                    disabled: false,
                    href: "/",
                    },
                    {
                    title: "Skills Development",
                    disabled: false,
                    href: "#",
                    },
                    
                ],
        }
    },
}
</script>
<style scoped>
 
.breadcrumbs{
  background: #f9f9f9;
  color: orange;
}
</style>