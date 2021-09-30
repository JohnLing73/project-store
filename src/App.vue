<template>
  <div @click="toggleList">
    <the-header></the-header>
    <quick-link></quick-link>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from './ui/TheFooter.vue';
export default {
  components:{
    'the-footer': TheFooter
  },
  data() {
    return {
      spinning: false,
    };
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  methods: {
    toggleList() {
      this.$store.commit('toggleList',false);
    }
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  watch: {
    didAutoLogout(newVal, oldVal) {
      if(newVal && newVal !== oldVal) {
        this.$router.replace('/home');
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: $white;
  color: $black;
  font-family: "Play", sans-serif;
  transition: all 0.5s ease;
  overflow-x: hidden;
}
.dark-mode {
  background-color: $black;
  color: $white;
}
a.darkMode {
  color: $white !important;
  background-color: transparent !important;
    &:hover {
      color: $aqua !important;
    }
}
header.darkMode,
ul.dark-mode,
form.darkMode,
footer.dark-mode {
  background-color: $header-footer-dark !important;
  color: $white !important;
  li {
    text-decoration-color: $aqua !important;
  }
}

main {
  padding: 1rem 1.5rem;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.banner-container {
  width: 100%;
  height: calc(100vh - 10vh);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>