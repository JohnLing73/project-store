<template>
    <form :class= "{darkMode: darkMode}">
      <h2>Sign Up</h2>
      <div class="form-each">
        <label for="email">Email</label>
        <input type="email">
      </div>
      <div class="form-each">
        <label for="password">Password</label>
        <input type="password">
      </div>
      <base-button :link= "false">Sign Up</base-button>
      <base-button :link= "false" mode= "minor">Switch to Sign In</base-button>
    </form>
    <base-dialog
      title= "test title"
      content= "test paragraph"
      :showdialog= "false"
    ></base-dialog>
</template>
<style lang="scss" scoped>
  form {
    padding: 2rem 5rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    box-shadow: $box-shadow;
    width: 45%;
    min-width: 325px;
    margin: 1rem auto;
      h2 {
        text-align: center;
      }
  }
  .form-each {
    // padding: 1rem 1.5rem;
    margin: 1.5rem 1rem;
      label {
        display: block;
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
      }
  }
  input {
    &[type="email"] {
      @include input-style;
      background-image: url("../../assets/images/forall/email.svg");
      background-size: 1.5rem;
    } 
    &[type="password"] {
      @include input-style;
      background-size: 1.5rem;
      background-image: url('../../assets/images/forall/key.svg');
    }
  }
  button {
    margin: 1.5rem 2.5rem 1rem 1rem;
  }
</style>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    darkMode() {
      if(this.$store.getters.theme === 'light') {
        return true;
      }else{
        return false;
      }
    },
    
  }
}
</script>
