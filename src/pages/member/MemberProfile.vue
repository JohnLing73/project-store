<template>
  <transition>
    <div 
      class="card-fake"
      :class="{ darkMode: this.$store.state.normal.colorTheme === 'light' }"
    >
      <div class="mem-profile-page">
        <div class="user-brief-info">
          <div class="user-img-container">
            <img src="../../assets/images/forall/user.svg" alt="" />
          </div>
          <span>{{ memId }}</span>
        </div>
        <div class="brief-info">
          <span>Birth:</span> <span>{{ memBirth }}</span>
        </div>
        <div class="brief-info">
          <span>Email: </span> <span>{{ memEmail }}</span>
        </div>
        <div class="brief-info">
          <span>Location: </span><span>{{ memLocation }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['memId', 'memBirth', 'memEmail', 'memLocation'])
  },
  methods: {},
};
</script>
<style lang="scss" >
.card-fake {
  padding: 0 !important;
  background-color: $white;
  overflow: hidden;
  border-radius: 12px;
  width: 750px;
  margin: auto;
  box-shadow: $box-shadow;
}

.card-fake.darkMode {
  background-color: $black;
}

.user-img-container {
  width: 80px;
  height: 80px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.user-brief-info {
  padding: 1rem;
  background-color: $base-button-bck;
  @include flex-model($align: flex-end);
  span {
    font-size: $h2;
    margin-left: 1rem;
  }
}

span {
  font-size: $h3;
}

.brief-info {
  margin: 1rem;
  span {
    &:last-child {
      display: inline-block;
      margin-left: 1rem;
    }
  }
}

@media (max-width: 1217px) {
  .container {
      width: 650px;
  }
  .container-each {
    width: 100%;    
  }
}
</style>
