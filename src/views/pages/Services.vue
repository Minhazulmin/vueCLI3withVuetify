<template>
  
  <v-container>
  <!--Start breadcrumbs -->
  <v-title class="float-right text-h6 py-3  breadcrumbs"><span class="mr-5" > Services</span></v-title>
  <v-breadcrumbs :items="breadcrumbs" class="breadcrumbs"   color="orange">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
  <!--End breadcrumbs -->
    <h2 class="d-flex justify-center mb-2  title">Our Servies</h2>
    <p class="d-flex justify-center mb-3">
      To take our service and grow business
    </p>
    <v-divider></v-divider>
    <v-row>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        md="4"
        xl="2"
        lg="3"
        sm="6"
        xs="12"
      >
        <v-sheet class="ma-2 pa-2">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="service.logo"
              cover
            >
            </v-img>
            <v-card-title color="#000">{{ service.name }}</v-card-title>
            <v-card-subtitle>{{ service.subtitle }} </v-card-subtitle>
            <v-card-text>
              <div>{{ service.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>
              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Software Development",
          value: "software_development",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "1 Year Free Support",
          logo: "https://i0.wp.com/hexcodeplus.com/wp-content/uploads/2021/10/265-2659774_software-developer-clipart-png-download-cloud-team-123.png?fit=900%2C814&ssl=1",
        },
        {
          name: "Web Development",
          value: "web_development",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "2 Year Free Support",
          logo: "https://static.vecteezy.com/system/resources/thumbnails/004/578/861/small_2x/creative-web-developer-and-seo-optimization-free-vector.jpg",
        },
        {
          name: "Web Design",
          value: "web_design",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "10 Revision",
          logo: "https://img.freepik.com/free-vector/flat-web-development-concept-cms_23-2148806100.jpg?w=2000",
        },
        {
          name: "Graphic Design",
          value: "graphic_design",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "10 Revision",
          logo: "https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg?w=2000",
        },
        {
          name: "Digital Marketing",
          value: "digital_marketing",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "Free Learn From Our Website",
          logo: "https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-modern-flat-design-concept-of-digital-marketing-with-giant-megaphone-and-png-image_2157858.jpg",
        },
        {
          name: "Bulk SMS",
          value: "bulk_sms",
          description: "Whitehaven Beach Whitsunday Island, Whitsunday Islands",
          subtitle: "Get Free 10 SMS",
          logo: "https://www.putulhost.com/wp-content/uploads/2020/09/about-bulksale.png",
        },
      ],
      breadcrumbs: [
        {
          title: "Home",
          disabled: false,
          href: "/",
        },
        {
          title: "Services",
          disabled: false,
          href: "#",
        },
        
      ],
    };
  },
};
</script>
<style scoped>
.title {
  background: linear-gradient(to right, #42d392, #647eff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-shadow: 2px 7px 5px rgb(0 0 0 / 14%);
}
.breadcrumbs{
  background: #f9f9f9;
  color: orange;
}
</style>