<template>
<base-card>
  <div class="mem-profile-page">
    <div class="user-brief-info">
      <div class="user-img-container">
        <img src="../../assets/images/forall/user.svg" alt="">
      </div>
      <span>{{ memberInfo[0].memId }}</span>
    </div>
      <div class="brief-info">
        <span>Birth: {{ memberInfo[0].birth }}</span>
      </div>
      <div class="brief-info">
        <span>Email: {{ memberInfo[0].email }}</span>
      </div>
      <div class="brief-info">
        <span>Location: {{ memberInfo[0].location }}</span>
      </div>
  </div>
</base-card>
</template>
<script>
export default {
  data() {
    return {
      }
  },
  computed:{
    memberInfo() {
      return this.$store.state.member.theFinalMembers
    } 
  },
  methods:{
  }
}
</script>
<style lang="scss">
  

  // .card {
  //   margin-top: 0 !important;
  // }
  .user-img-container {
    width: 150px;
    height: 150px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
  }

  .user-brief-info {
    @include flex-model($align: flex-end);
    span{
      font-size: $h2;
      margin-left: 1rem;
    }
  }

  span {
      font-size: $h3;
  }

  .brief-info {
    margin: 1rem;
  }
</style>