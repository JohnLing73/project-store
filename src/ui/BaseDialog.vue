<template>
  <teleport to="body">
    <div v-if= "showdialog" class="backdrop" @click = "closeDialog">
      <dialog open v-if= "showdialog">
          <slot name= "header">
            <h2>{{ title }}</h2>
          </slot>
        <section>
          <p>{{ content }}</p>
          <base-button :link= "false" @click= "closeDialog">Close</base-button>
        </section>
      </dialog>
    </div>
  </teleport>
</template>
<script>
export default {
  props: {
    showdialog: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }, 
    content: {
      type: String,
      required: true
    }},
    methods: {
      closeDialog() {
        // this.$emit('close');
      }
    }
};
</script>
<style lang="scss" scoped>
dialog {
  padding: 0rem 0rem 1rem;
  position: fixed;
  top: 20vh;
  left: 0%;
  min-width: 325px;
  width: 35%;
  max-width: 530px;
  border: transparent;
  border-radius: $border-radius;
  overflow: hidden;
  z-index: 15;
  h2 {
    padding: none !important;
    background-color: transparent;
    height: auto;
    text-align: center;
    background-color: $header-footer-dark;
    color: $white;
    margin: auto;
    padding: 1rem;
    width: 100%;
  }
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;
}
section {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
    p {
      font-size: $h3;
    }
    button {
      align-self: flex-end;
    }
}
</style>
