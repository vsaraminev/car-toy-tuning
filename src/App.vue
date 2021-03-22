<template>
<body>
  <div id="app">
    <the-header />
    <router-view></router-view>
    <the-footer />
  </div>
</body>  
</template>

<script>
import TheHeader from "./components/core/TheHeader.vue";
import TheFooter from "./components/core/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style> 
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
