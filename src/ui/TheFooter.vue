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
      <h2 id="follow-us">Follow Us</h2>
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
    &:first-child {
      @include flex-model($dir: column, $align: center);
      > a {
        align-self: center;
        transition: all 0.5s ease;
        &:hover {
          text-decoration: underline;
          color: $aqua;
        }
      }
    }
    &:nth-child(2) {
      @include flex-model($dir: column, $align: center);
    }
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: $distance-block auto;
      width: 100%;
      p {
        margin-left: $distance-window;
        text-align: center;
      }
    }
  }
}
footer {
  h2,
  a {
    text-decoration: none;
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }
  a {
    text-align: center;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.3rem;
  }
  >div {
    &:first-child {
      h2 {
        width: 140px;
      }
    }
  }
}

.icon-container {
  display: flex;
  justify-content: flex-start;
  > svg {
    margin:0 $distance-window;
    margin-left: 0;
  }
}

footer {
  > div {
    width: 50%;
  }
}

ul,
li {
  margin: auto;
}

li {
  margin-bottom: 0.3rem;
  width: 140px;
}

#follow-us {
  width: 184.5px;
}
</style>
