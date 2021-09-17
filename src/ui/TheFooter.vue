<template lang="">
  <footer>
    <div>
      <h2>Pages</h2>
      <ul>
        <li v-for="page in pages" :key="page.url">
          <router-link
            :to="page.url" 
            :class= "{ darkMode: darkMode }"
          >
           {{ page.linkText }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Follow Us</h2>
      <div class="icon-container">
        <font-icon
          v-for="icon in footerIcon"
          :key="icon.icon"
          :icon-props="icon.icon"
          :size="icon.size"
        ></font-icon>
      </div>
    </div>
    <div>
      <the-logo logoWidth="75" logoHeight="75"></the-logo>
      <p>This Website is a non-profit project.</p>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      footerIcon: [
        {
          icon: ["fab", "facebook"],
          size: "2x",
        },
        {
          icon: ["fab", "instagram"],
          size: "2x",
        },
        {
          icon: ["fab", "twitter"],
          size: "2x",
        },
      ],
      
    };
  },
  computed: {
    // ...mapGetters(['toManProducts', 'toWomanProducts', 'toOtherProducts', 'toAbout']),
    ...mapGetters(['toAbout']),
    darkMode() {
      if (this.$store.getters.theme === "light") {
        return true;
      } else {
        return false;
      }
    },
    pages(){
      return [
        {
          url: { name: 'mainProduct', params: { mainPage: 'Man'} },
          linkText: 'Man Products'
        },
        {
          url: { name: 'mainProduct', params: { mainPage: 'Woman' } },
          linkText: 'Woman Products'
        },
        {
          url: { name: 'mainProduct', params: { mainPage: 'Other'} },
          linkText: 'Other Products'
        },
        {
          url:this.toAbout,
          linkText: 'About Pages'
        },
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  background-color: whitesmoke;
  padding: $distance-window $distance-window 0rem;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-shadow: $box-shadow;
  > div {
    flex-basis: 50%;
    &:first-child {
      display: flex;
      flex-flow: column wrap;
      > a {
        align-self: center;
        transition: all 0.5s ease;
        &:hover {
          text-decoration: underline;
          color: $aqua;
        }
      }
    }
    &:last-child {
      align-self: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: $distance-block auto;
      p {
        text-align: center;
      }
    }
  }
}
footer {
  h2,
  a {
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.3rem;
  }
}

.icon-container {
  display: flex;
  justify-content: center;
  svg {
    margin: 0rem 1rem;
  }
}

ul,
li {
  margin: auto;
}

li {
  padding-left: 4rem;
  margin-bottom: 0.3rem;
}

</style>
