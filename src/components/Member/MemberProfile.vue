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
          <span>{{ memberInfo[0].memId }}</span>
        </div>
        <div class="brief-info">
          <span>Birth:</span> <span>{{ memberInfo[0].birth }}</span>
        </div>
        <div class="brief-info">
          <span>Email: </span> <span>{{ memberInfo[0].email }}</span>
        </div>
        <div class="brief-info">
          <span>Location: </span><span>{{ memberInfo[0].location }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    memberInfo() {
      return this.$store.state.member.theFinalMembers;
    },
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
</style>
