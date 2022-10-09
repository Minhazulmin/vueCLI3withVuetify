<template>
<v-container>
  <!--  -->
   <v-img class="align-end text-white mb-3"  height="300" src="https://ds.rokomari.store/rokomari110/banner/01ef8896-3e78-4dbc-a92c-14cd5261b22a.webp" cover > </v-img>
  <!--  -->

<!-- একাডেমিক বইসমূহ -->
    <v-divider ></v-divider>
  <h2 class="text-h6 mb-2 mt-3  title"><span>একাডেমিক বইসমূহ</span> </h2>
    <v-divider></v-divider>

    <v-row>
      <v-col
        v-for="(book, index) in books"
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
         
            <v-btn color="success lighten-2" class="text-end" text> বইটি কিনুন </v-btn>
            <v-spacer></v-spacer>
                <small class="mr-2">৳ 97</small> 
            </v-card-actions>
          
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <div align="center">
        <v-btn class="ma-2 mr-16"  @click="loader = 'loading'" :disabled="loading" :loading="loading"  color="success" link :to="'#'"> সকল বই দেখো <v-icon end icon="mdi-arrow-right-thin"></v-icon></v-btn>
    </div>

<!-- সকল বই দেখো স্কিল ডেভেলপমেন্ট বইসমূহ -->
 <v-divider class="mt-5"></v-divider>
<h2 class="text-h6 mb-2 mt-3  title"><span>স্কিল ডেভেলপমেন্ট বইসমূহ</span> </h2>
 <v-divider></v-divider>
  <v-row>
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
         
            <v-btn color="success lighten-2" class="text-end" text> বইটি কিনুন </v-btn>
            <v-spacer></v-spacer>
                <small class="mr-2">৳ 200</small> 
            </v-card-actions>
          
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <div align="center" class="mb-3">
        <v-btn class="ma-2 mr-16"  @click="loader = 'loading'" :disabled="loading" :loading="loading"  color="success" link :to="'#'"> সকল বই দেখো <v-icon end icon="mdi-arrow-right-thin"></v-icon></v-btn>
    </div>
<!-- end সকল বই দেখো স্কিল ডেভেলপমেন্ট বইসমূহ -->
<v-divider></v-divider>
  </v-container>
</template>
<script>
export default {
    data() {
        return{
            loader: null,
            loading: false,
            
            books: [
                    {
                    name: "HSC Physics 1st Paper",
                    value: "HSC_Physics_1st_Paper",
                    description: "তুমি কি রসায়ন ১ম পত্র নিয়ে সকল সমস্যার সবচেয়ে সহজতম সমাধান",
                    writer: "Minhaz",
                    logo: "https://d1bcd28fvv0vzb.cloudfront.net/fit-in/480x480/filters:autojpg()/store/thumbnails/hsc_physics_1st_paper_portrait.png",
                    },
                    {
                    name: "HSC Chemistry 1st Paper",
                    value: "HSC_Chemistry_1st_Paper",
                    description: "এইচএসসি রসায়ন প্রথম পত্রের সকল চ্যাপ্টারের ভিডিও স্লাইডস",
                    writer: "Munna",
                    logo: "https://lms10.s3.ap-southeast-1.amazonaws.com/store/thumbnails/HSC_Chemistry_1st%20_Paper.png",
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
}
</script>
<style scoped>
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