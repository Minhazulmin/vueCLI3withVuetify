<template>

  <v-container>
    <!-- Banner -->
    <div class="main-div">
        <h1 class="text-capitalize "><span class="title">Our Professional Services</span></h1>
        <p>To take our service from us and make your business more professional</p>
       
    </div>
    <!--End Banner -->
 
 
    <v-row>
      <v-col v-for="(service, index) in services" :key="index" cols="12" md="4" xl="2" lg="3" sm="6" xs="12" >
        <v-sheet class="ma-2 pa-2">
          <v-card class="mx-auto" max-width="400">
            <v-img class="align-end text-white" height="200" :src="service.logo" cover >
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
          logo: "https://www.ebulksms.com/webroot/files/uploads/posts/mobile-device-communication-vector-id956237526.jpg",
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
          logo: "https://www.ebulksms.com/webroot/files/uploads/posts/mobile-device-communication-vector-id956237526.jpg",
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
h1{
    font-size: 60px;
    font-weight: 900;
    text-shadow: 2px 7px 5px rgb(0 0 0 / 14%);
    text-align: center;
}
p{
    max-width: 960px;
    line-height: 1.5;
    color: var(--vt-c-text-2);
    transition: color .5s;
    font-size: 22px;
    margin: 24px auto 40px;
     text-align: center;
}
</style>