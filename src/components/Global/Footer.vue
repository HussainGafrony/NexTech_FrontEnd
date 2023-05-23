<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-img width="50%" src="../../assets/logo.svg" class="ml-4"></v-img>
        <v-col cols="10">
          <v-card-text class="text-black"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </v-card-text>
        </v-col>
        <v-card-title class="text-black ml-2"> Accepted Payments </v-card-title>
        <v-row justify="start" no-gutters>
          <v-card width="70%" elevation="0" class="bg-transparent mt-3">
            <v-row justify="start" no-gutters>
              <v-card class="ml-5 mb-4 border" width="20%" height="40" elevation="0" v-for="item in paymnetlogo" :key="item.id">
                <v-img :src="item"></v-img>
              </v-card>
            </v-row>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="2">
        <v-card-title class="text-black"> Department </v-card-title>
        <v-card-subtitle class="text-black mb-1 mt-2" v-for="title in Department" :key="title">
          {{ title }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="2">
        <v-card-title class="text-black"> About Us </v-card-title>
        <v-card-subtitle class="text-black mb-1 mt-2" v-for="title in About" :key="title">
          {{ title }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="2">
        <v-card-title class="text-black"> Services </v-card-title>
        <v-card-subtitle class="text-black mb-1 mt-2" v-for="title in Services" :key="title">
          {{ title }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="2">
        <v-card-title class="text-black"> Help </v-card-title>
        <v-card-subtitle class="text-black mb-1 mt-2" v-for="title in Help" :key="title">
          {{ title }}
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-divider class="ml-5 mt-6 mb-10" color="black" style="width: 36cm"> </v-divider>
    <v-row justify="start ml-2">
      <v-card-title class="text-body-1"> <v-icon size="x-large" color="#C34482" icon="mdi-bag-checked"> </v-icon> Terms of Service </v-card-title>
      <v-card-title class="text-body-1"> <v-icon size="x-large" color="#C34482" icon="mdi-gift-outline"> </v-icon> Gift Cards </v-card-title>
      <v-card-title class="text-body-1"> <v-icon size="x-large" color="#C34482" icon="mdi-help-circle-outline"> </v-icon> Help Canter </v-card-title>
      <v-spacer> </v-spacer>
      <v-card-title class="text-body-1 ml-16"> Terms of Service </v-card-title>

      <v-card-title class="text-body-1"> Privacy & Policy </v-card-title>
      <v-spacer> </v-spacer>
      <v-card-title class="text-body-1"> All Right reserved by Musemind | {{ new Date().getFullYear() }} </v-card-title>
      <v-spacer> </v-spacer>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Footer_",
  data: () => {
    return {
      paymnetlogo: [require("../../assets/payment/mastercard.png"), require("../../assets/payment/american.png"), require("../../assets/payment/sepa.png"), require("../../assets/payment/paypal.png"), require("../../assets/payment/jcp.png"), require("../../assets/payment/discover-card.png")],

      Department: ["Fashion", "Education Product", "Frozen Food", "Frozen Food", "Organic Grocery", "Office Supplies", "Beauty Products", "Books", "Electronics & Gadget", "Travel Accessories", "Fitness", "Sneakers", "Toys", "Furniture"],
      About: ["About shopcart", "Careers", "News & Blog", "Help", "Press Center", "Shop by location", "Shopcart brands", "Affiliate & Partners", "Ideas & Guides"],
      Services: ["Gift Card", "Mobile App", "Shipping & Delivery", "Order Pickup", "Account Signup"],
      Help: ["Shopcart Help", "Returns", "track orders", "contact us", "feedback", "Security & Fraud"],
    };
  },
};
</script>
<style scoped>
.a {
  text-decoration: none;
  color: black;
  padding: 0px;
  margin: 0px;
  text-align: start;
}

.text_space {
  padding-bottom: 0px;
}
</style>