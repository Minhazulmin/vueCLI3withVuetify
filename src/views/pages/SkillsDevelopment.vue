<template>
  <v-container>
    <!-- Banner -->
    <div class="main-div">
        <h1 class="text-capitalize "><span class="title">Bangladesh </span>largest learning platform</h1>
        <p>Free to learn with us and develop your skills to get a good job.Make your life happy with us.</p>
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="8" lg="6" xl="6" sm="8" xs="6">
              <v-form>
                <v-card-text>
                  <v-text-field :loading="loading" variant="solo" label="Search templates" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick" ></v-text-field>
                </v-card-text>
              </v-form>
            </v-col>
          </v-row>
    </div>
    <!--End Banner -->

    <!-- Frontend category -->
    <div class="main-div mt-5">
      <v-row>
        <v-col cols="12" md="3" lg="3" xl="2" sm="4" xs="6" v-for="(frontend,index) in frontends" :key="index">
          <v-card class="py-2" rounded="pill" color="success" variant="outlined"  elevation="0" >
            <v-img  height="40" :src="frontend.logo"></v-img>
            <span>{{frontend.title}}</span> 
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--End Frontend category-->

    <!-- Programmings -->
    <div class="main-div mt-10">
      <v-row>
        <v-col cols="12" md="3" lg="3" xl="2" sm="4" xs="6" v-for="(programming,index) in programmings" :key="index">
          <v-card class="py-2" rounded="pill" color="success" variant="outlined"  elevation="0" >
            <v-img  height="40" :src="programming.logo"></v-img>
            <span>{{programming.title}}</span> 
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--End Programmings -->

    <!-- New Releases -->
    <!-- <v-divider ></v-divider> -->
    <div class="mt-10">
      <h1 class="text-capitalize d-flex justify-center"><span class="title">Top Instructor by Courses </span></h1>
      <p>Free to learn with us and develop your skills to get a good job.Make your life happy with us.</p>
    </div>
    <!-- <v-divider></v-divider> -->
    <!--End New Releases -->


  <!-- Instructor Profile and review  -->
  <v-row class="mt-3 mb-10">
    <v-col cols="12" md="3" lg="3" xl="2" sm="6" xs="12" v-for="(instructor,index) in instructors" :key="index">
      <v-hover v-slot="{ isHovering, props }">
        <v-card  v-bind="props" >
          <v-img :src="instructor.image"></v-img>

          <v-card-text>
            <h2 class="text-h6 primary--text">{{instructor.name}}</h2>
            {{instructor.designation}}
          </v-card-text>

          <v-card-title>
            <v-rating :value="4"  dense color="orange" background-color="orange" hover ></v-rating>
            <span class="primary--text text-subtitle-2">64 Reviews</span>
          </v-card-title>

          <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center" >
            <v-btn flat>See more info</v-btn>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <!-- End instructor profile and review -->


    <!-- New Releases -->
    <v-divider ></v-divider>
        <h2 class="text-h6 mb-2 mt-3  title"><span>New Releases</span> </h2>
    <v-divider></v-divider>
    <!--End New Releases -->

    <!-- New releases books list-->
    <v-row class="mt-2">
      <v-col  v-for="(book, index) in books" :key="index" cols="12" md="4" xl="2" lg="3" sm="6" xs="12" style="padding:0px" >
        <v-sheet class="ma-2 pa-2">
          <v-card class="mx-auto" max-width="400">
            <v-img class="align-end text-white" height="300" :src="book.logo" cover > </v-img>
              <v-card-title color="#000">{{ book.name }}</v-card-title>
              <v-card-subtitle>{{ book.writer }} </v-card-subtitle>
              <v-card-text> <div>{{ book.description }}</div></v-card-text>

              <v-card-actions>
                <v-btn color="success lighten-2" class="text-end" text> See Details </v-btn>
                <v-spacer></v-spacer>
                <small class="mr-2"> ৳ 950 </small> 
              </v-card-actions>
              
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <!--End new releases books list-->




    <!-- ALL books button -->
    <div align="center">
      <v-btn class="ma-2 mr-16"  @click="loader = 'loading'" :disabled="loading" :loading="loading"  color="success" link :to="'#'"> সকল বই দেখো <v-icon end icon="mdi-arrow-right-thin"></v-icon></v-btn>
    </div>
    <!--End all books button -->

    <!-- Most popular Title -->
    <v-divider class="mt-5"></v-divider>
      <h2 class="text-h6 mb-2 mt-3  title"><span>Most popular</span> </h2>
    <v-divider></v-divider>
    <!--End Most popular Title -->

    <!-- Most popular books list -->
      <v-row class="mt-2">
          <v-col
            v-for="(book, index) in books2"
            :key="index"
            cols="12"
            md="4"
            xl="2"
            lg="3"
            sm="6"
            xs="12"
            style="padding:0px"
          >
            <v-sheet class="ma-2 pa-2">
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="align-end text-white"
                  height="300"
                  :src="book.logo"
                  cover
                >
                </v-img>
                <v-card-title color="#000">{{ book.name }}</v-card-title>
                <v-card-subtitle>{{ book.writer }} </v-card-subtitle>
                <v-card-text>
                  <div>{{ book.description }}</div>
                </v-card-text>

                
                <v-card-actions>
            
                <v-btn color="success lighten-2" class="text-end" text> See Details </v-btn>
                <v-spacer></v-spacer>
                    <small class="mr-2">৳ 1000</small> 
                </v-card-actions>
              
              </v-card>
            </v-sheet>
          </v-col>
      </v-row>
    <!-- End Most popular books list -->

    <!--Most popular click to all books -->
    <div align="center" class="mb-3">
      <v-btn class="ma-2 mr-16"  @click="loader = 'loading'" :disabled="loading" :loading="loading"  color="success" link :to="'#'"> সকল বই দেখো <v-icon end icon="mdi-arrow-right-thin"></v-icon></v-btn>
    </div>
    <!--End Most popular click to all books -->
    <v-divider></v-divider>
  </v-container>
</template>
<script>
export default {
    data() {
        return{
            overlay: false,
            loader: null,
            loading: false,
            
            books: [
                    {
                    name: "ঘরে বসে Spoken English",
                    value: "HSC_Physics_1st_Paper",
                    description: "জব ইন্টারভিউ, প্রেজেন্টেশন, ভাইভা, দেশি-বিদেশি ক্লায়েন্ট মিটিং",
                    writer: "Minhaz",
                    logo: "https://cdn.10minuteschool.com/lg/images/Thumbnails/Ghore-boshe-Spoken-English-Course-Thumbnail.jpg",
                    },
                    {
                    name: "IELTS Course by Munzereen Shahid",
                    value: "HSC_Chemistry_1st_Paper",
                    description: "IELTS পরীক্ষার বিভিন্ন অংশের ফরম্যাট, প্রশ্ন ও উত্তরের ধরন",
                    writer: "Munna",
                    logo: "https://cdn.10minuteschool.com/lg/images/thumbnails/ielts_course_by_munzereen_shahid_16_9.jpg",
                    },
                    {
                    name: "HSC Chemistry 2nd Paper",
                    value: "HSC_Chemistry_2nd_Paper",
                    description: "তুমি কি রসায়ন ২য় পত্র নিয়ে সকল সমস্যার সবচেয়ে সহজতম",
                    writer: "Zahid Munna",
                    logo: "https://lms10.s3.ap-southeast-1.amazonaws.com/store/thumbnails/HSC_Chemistry_2nd%20_Paper.png",
                    },
                    {
                    name: "সাধারণ গণিত-অষ্টম শ্রেণি",
                    value: "graphic_design",
                    description: "যেসকল শিক্ষার্থীদের স্কুলে ক্লাসের লেকচার বুঝতে সমস্যা হয়",
                    writer: "Dr.Jone De",
                    logo: "https://cdn.10minuteschool.com/images/store/2022/thumbnails/8-math-s.jpg",
                    },
                    {
                    name: "এইচ.এস.সি জীববিজ্ঞান ২য় পত্র",
                    value: "digital_marketing",
                    description: "যেসকল শিক্ষার্থীদের স্কুলে ক্লাসের লেকচার বুঝতে সমস্যা হয়",
                    writer: "Zahid Munna",
                    logo: "https://cdn.10minuteschool.com/images/store/2022/thumbnails/hsc-bio-2-s.jpg",
                    },
                    {
                    name: "এইচ.এস.সি উচ্চতর গণিত ১ম পত্র",
                    value: "bulk_sms",
                    description: "যাদের কলেজের ক্লাসের লেকচার বুঝতে সমস্যা",
                    writer: "Dr.Jone De",
                    logo: "https://cdn.10minuteschool.com/images/store/2022/thumbnails/hsc-hm-s.jpg",
                    },
                ],

            books2: [
                    {
                    name: "ঘরে বসে স্পোকেন ইংলিশ",
                    value: "HSC_Physics_1st_Paper",
                    description: "তুমি কি স্পোকেন ইংলিশে আরো উন্নতি করতে চাও? ",
                    writer: "Minhaz",
                    logo: "https://d1yreyj8btzg0t.cloudfront.net/images/store/sqr-img/GBSE.jpg",
                    },
                      {
                    name: "সবার জন্য Vocabulary",
                    value: "bulk_sms",
                    description: "তুমি কি জানতে ইংরেজি ভাষায় ১৭ হাজারেরও বেশি শব্দ রয়েছে ? ",
                    writer: "Dr.Jone De",
                    logo: "https://10ms-cloudfront.s3.ap-southeast-1.amazonaws.com/images/store/sqr-img/%28Compressed%29%20%20Shobar%20Jonno%20Vocabulary%20-%20467x721px%20Ratio%20Cover-1.jpg",
                    },
                    {
                    name: "কমিউনিকেশন হ্যাকস",
                    value: "HSC_Chemistry_1st_Paper",
                    description: "তুমি কি মানুষের সাথে যোগাযোগের ক্ষেত্রে সমস্যার সম্মুখীন হচ্ছো?",
                    writer: "Munna",
                    logo: "https://d1yreyj8btzg0t.cloudfront.net/images/store/sqr-img/Communication%20Hacks%20Offline%20Front%20Cover.jpg",
                    },
                   
                    {
                    name: "মোবাইল ফটোগ্রাফি",
                    value: "graphic_design",
                    description: "মুঠোফোনে ক্লিকবাজি করার বিভিন্ন প্র্যাক্টিকাল কৌশল নিয়ে",
                    writer: "Dr.Jone De",
                    logo: "https://d1yreyj8btzg0t.cloudfront.net/images/store/sqr-img/mobile-photography.jpg",
                    },
                    {
                    name: "গ্রাফিক ডিজাইনের আসল ফান্ডা",
                    value: "digital_marketing",
                    description: "আপনি কি গ্রাফিক ডিজাইনের মতো একটা সেক্টরে আপনার",
                    writer: "Zahid Munna",
                    logo: "https://d1yreyj8btzg0t.cloudfront.net/images/store/sqr-img/Graphic-Design-Er-Ashol-Funda---Asif-Hossain----Book-Cover---Front-1.jpg",
                    },
                  
                     {
                    name: "ঘরে বসে আয় করুন",
                    value: "HSC_Chemistry_2nd_Paper",
                    description: "তুমি কি রসায়ন ২য় পত্র নিয়ে সকল সমস্যার সবচেয়ে সহজতম",
                    writer: "Zahid Munna",
                    logo: "https://d1yreyj8btzg0t.cloudfront.net/images/store/sqr-img/%28Compressed%29%20467x721px%20Ratio%20Cover.jpg",
                    },
                ],
            frontends:[
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" ,title:'Vue Js' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" ,title:'React Js' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" ,title:'Node Js' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" ,title:'Angular Js' },
              { logo:"https://logodix.com/logo/1796970.png" ,title:'ASP .Net' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" ,title:'Larvel' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png" ,title:'Nuxt Js' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" ,title:'Next Js' },
              ],
            programmings:[
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" ,title:'C Programming' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" ,title:'C++' },
              { logo:"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png" ,title:'C#' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" ,title:'Javascript' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" ,title:'AJAX' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" ,title:'Ruby' },
              { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" ,title:'Python' },
              { logo:"https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" ,title:'Java' },
              ],
            instructors:[
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Minhazul Min',designation:'Programmer and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
              {image:'https://avatars.githubusercontent.com/u/27299153?v=4',name:'Zahid Munna',designation:'Civil Enginner and Instructor'},
            ]
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    methods:{
       onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    }
}
</script>
<style scoped>
.main-div{
    padding: 50px 32px;
    text-align: center;
}
.title{
    background: linear-gradient(to right, #42d392 ,#647eff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    
    
}
h1{
    font-size: 60px;
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
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>