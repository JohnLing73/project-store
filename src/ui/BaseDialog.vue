<template>
  <teleport to="body">
    <div v-if= "showdialog" class="backdrop" @click = "closeDialog"></div>
    <transition name="dialog">
      <dialog open v-if= "showdialog" :class="{darkMode: this.$store.state.normal.colorTheme === 'light'}">
          <slot name= "header">
            <h2 :class="{darkMode: this.$store.state.normal.colorTheme === 'light'}">{{ title }}</h2>
          </slot>
        <section>
          <p :class="{darkMode: this.$store.state.normal.colorTheme === 'light'}">{{ content }}</p>
          <slot></slot>
          <base-button :link= "false" @click= "closeDialog" v-if="confirmExist">{{ btnText }}</base-button>
        </section>
      </dialog>
    </transition>
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
      required: false
    },
    confirmExist: {
      type: Boolean,
      required: false,
      default: true
    },
    btnText: {
      type: String,
      default: 'Confirm',
      required: false
    }
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      }
    },
  emits:['close'],
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
dialog {
  section {
    padding: 1rem 2rem;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
      p {
        font-size: $h3;
      }
      button {
        align-self: flex-end;
        margin-top: 0.8rem;
      }
  }
}

dialog.darkMode {
  background-color: $black;
}

h2.darkMode,
p.darkMode {
  color: $white;
}

.dialog-enter-from,
.dialog-leave-to {
  transform: scale(0.7);
  opacity: 0;
}

.dialog-enter-active {
  transition: all 0.8s ease-out;
}
.dialog-leave-active {
  transition: all 0.8s ease-out;
}

.dialog-enter-to,
.dialog-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
