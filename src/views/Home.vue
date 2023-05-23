<template>
  <Header_ />

  <v-row class="mt-8" align="center" justify="end">
    <v-img src="../assets/logo.svg" class="ml-16 pl-16" height="50"> </v-img>
    <v-card-title class="click" @click="expand2 = !expand2">Category </v-card-title>

    <v-card-title>Deals </v-card-title>

    <v-card-title>What’s New </v-card-title>
    <v-card-title>Delivery </v-card-title>
    <v-text-field v-model="Products.Search" placeholder="Search Product" class="font-weight-bold text-xl ml-8" rounded="pill" hide-details single-line append-inner-icon="mdi-search-web"></v-text-field>
    <v-row align-content="center" align="center" class="ml-16">
      <v-icon size="x-large" icon="mdi-account-circle-outline"> </v-icon>

      <v-card-title>Account</v-card-title>
      <v-icon size="x-large" class="pl-15 mr-3" icon="mdi-cart-outline"> </v-icon>

      <v-card-title>Cart</v-card-title>
    </v-row>
    <v-img src="../assets/home.png" class="mt-8">
      <v-expand-x-transition>
        <v-col cols="5" class="mt-0 pt-1" offset="3">
          <v-card v-show="expand2">
            <v-row class="mt-2 mb-2">
              <v-card elevation="2" width="350" class="ml-16 mb-6 mt-4" v-for="item in Categories.Items" :key="item" @click="() => console.log('card_category')">
                <v-row align="start" align-content="start" justify="start">
                  <v-col cols="4">
                    <v-img :src="item.image" height="100"></v-img>
                  </v-col>
                  <v-col class="mt-4 pa-0 ma-0 my-0 py-0">
                    <v-card-title class="pa-0 ma-0 my-0 py-0">
                      {{ item.name }}
                    </v-card-title>
                    <v-card-subtitle class="pa-0 ma-0 my-0 py-0 text-lowercase d-inline-block text-truncate" style="max-width: 150px"> {{ item.description }} </v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-expand-x-transition>
    </v-img>
  </v-row>
  <v-col class="ml-16 pl-16">
    <v-col class="ml-16 pl-16">
      <v-card-title class="ml-16 mt-7 text-h4 font-weight-bold"> Shop Our Top Categories </v-card-title>
      <v-row class="ml-9">
        <v-card width="10%" v-for="(image, index) in Images" :key="index" color="#F3F5F7" class="click rounded-lg ml-13 mt-9" elevation="0">
          <v-img :src="image" :class="{ 'zoomed-image': zoomed }" @mouseover="zoomIn" @mouseleave="zoomOut">
            <v-card-title class="font-weight-bold white--text mt-4 ml-11">{{ imageTitle[index] }}</v-card-title>
          </v-img>
        </v-card>
      </v-row>
      <v-card-title class="ml-16 mt-10 text-h4 font-weight-bold"> Todays Best Deals For You! </v-card-title>

      <v-container fluid style="width: 80%" class="ml-16 mt-7">
        <v-row justify="start">
          <v-card width="20%" elevation="0" class="ml-8 rounded-lg mb-16" height="43vh" color="#F3F5F7" v-for="(item, index) in Products.Items" :key="index">
            <v-col align="end" class="pt-2 mb-0">
              <v-avatar color="white" size="56" class="mb-0 pb-0">
                <v-icon x-large color="black" icon="mdi-heart-outline"></v-icon>
              </v-avatar>
            </v-col>
            <v-avatar size="220" tile class="mt-0 pt-0 rounded">
              <v-img :src="item.image" class="#f5f6f6 mt-0 pt-0" />
            </v-avatar>
            <v-col align="start" class="mt-0 pt-0 white">
              <v-card-actions class="mt-0 mb-0">
                <v-card-title class="text-h6 font-weight-bold pb-0 mb-0 pl-0 ml-0"> {{ item.name }} </v-card-title>
                <v-spacer></v-spacer>
                <v-card-title class="pr-0 pb-0 mb-0"
                  >$
                  {{ item.price }}
                </v-card-title>
              </v-card-actions>
              <v-col cols="9" class="pt-0 mt-0 pl-0 pb-0 mb-0">
                <v-card-subtitle class="pt-0 mt-0 pl-2">
                  {{ item.description }}
                </v-card-subtitle>
              </v-col>
            </v-col>
            <v-col align="start">
              <v-btn class="hover-color ml-1" color="" rounded large outlined> Add to cart </v-btn>
            </v-col>
          </v-card>
        </v-row>
        <v-divider class="ml-5 mt-12 pb-10" color="black" style="width: 36cm"> </v-divider>
        <Footer_></Footer_>
      </v-container>
    </v-col>
  </v-col>
</template>
<script>
// import { onMounted } from "vue";
export default {
  name: "Home_page",
  data() {
    return {
      expand2: false,
      zoomed: false,
      Images: ["https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png", "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png", "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png", "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png", "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png", "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"],
      imageTitle: ["Furniture", "Hand Bag", "Books", "Tech", "Sneakers", "Travel"],
      Products: {
        Search: "",
        Items: [],
        Settings: {
          RowsPerPage: 8,
          CurrentPage: 1,
          Total: 0,
        },
      },
      Categories: {
        Items: [],
        Settings: {
          RowsPerPage: 6,
          CurrentPage: 1,
          Total: 0,
        },
      },
    };
  },
  methods: {
    zoomIn() {
      this.zoomed = true;
    },
    zoomOut() {
      this.zoomed = false;
    },
    GetProducts() {
      this.Products.Items = null;
      this.$http
        .get(this.$GeneralClass.Domain() + window.atob(this.$GeneralClass.APIProduct()) + "?page=" + this.Products.Settings.CurrentPage, this.$GeneralClass.ApiHeader(null, this.Products.Settings.RowsPerPage))
        .then((Result) => {
          this.Products.Items = Result.data.data;
          this.Products.Settings.Total = Result.data.last_page;
          console.log(this.Products.Items);
        })
        .catch((Error) => console.log("Error Products : ", Error));
    },
    GetCategory() {
      this.Categories.Items = null;
      this.$http
        .get(this.$GeneralClass.Domain() + window.atob(this.$GeneralClass.APICategory()) + "?page=" + this.Categories.Settings.CurrentPage, this.$GeneralClass.ApiHeader(null, this.Categories.Settings.RowsPerPage))
        .then((Result) => {
          this.Categories.Items = Result.data.data;
          this.Categories.Settings.Total = Result.data.last_page;
        })
        .catch((Error) => console.log("Error Category : ", Error));
    },
  },
  mounted() {
    this.GetProducts();
    this.GetCategory();
  },
  // setup() {
  //   onMounted(() => {
  //     console.log("OnMountes");
  //   });
  // },
};
</script>
<style scoped>
.click {
  cursor: pointer;
}

.zoomed-image {
  transform: scale(1);
  transition: transform 0.3s;
}

.zoomed-image:hover {
  transform: scale(1.2);
}

.hover-color:hover {
  background-color: #003d29;
}
</style>