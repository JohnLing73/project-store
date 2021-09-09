<template>
  <div class="arc-container">
    <span>loading</span>
    <div class="arc"></div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang='scss' scoped>
.arc {
  border: 3px solid $spinner-blue;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border-top-color: transparent;
  border-left-color: transparent;
  animation: rotate 1.5s infinite linear;
  display: inline-block;
}

.arc-container {
  position: relative;
  display: inline-block;
}
.arc-container > span {
  position: absolute;
  font-weight:bold;
  font-size: 1.2rem;
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: spinColor 1.5s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    border-color: $spinner-green;
    border-top-color: transparent;
    border-left-color: transparent;
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinColor {
  from, to {
    color: $spinner-blue;
  }
  50% {
    color: $spinner-green;
  }
}
</style>
