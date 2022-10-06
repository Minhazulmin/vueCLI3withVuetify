<template>
  <v-container>


     <v-navigation-drawer>
        This is left menu
    </v-navigation-drawer>
    <v-content>
        This is content
    </v-content>
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