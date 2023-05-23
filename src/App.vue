<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style >
::-webkit-scrollbar {
  width: 5px;
  background: darkgrey;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px lightgray;
}

::-webkit-scrollbar-thumb {
  background: black;
}
</style>
