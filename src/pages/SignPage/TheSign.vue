<template>
  <div>
    <base-dialog
      :showdialog="showDialog"
      title="Warning!"
      content="You haven't fill the form completely. You sure want to leave the page?"
      @close="closeDialog"
    >
    </base-dialog>
    <base-loading v-if="isLoading"></base-loading>
    <base-dialog
      :showdialog="!!error"
      title="Signing Error"
      @close="closeDialogError"
    >
      <p :class="{ darkMode: this.$store.state.normal.colorTheme === 'light' }">
        {{ error }}
      </p>
    </base-dialog>
    <form :class="{ darkMode: darkMode }" @click.prevent>
      <h2 v-if="signStatus === 'signUp'">Sign Up</h2>
      <h2 v-else>Sign In</h2>
      <div
        class="form-each"
        :class="{ invalidStyle: inputMailInvalid === 'Invalid' }"
      >
        <label for="email">Email</label>
        <span class="invalid-warning" v-if="inputMailInvalid === 'Invalid'"
          >(Please Input Valid Email!)</span
        >
        <input
          name="email"
          id="email"
          type="email"
          v-model.trim="email"
          @blur="checkNormalValid"
        />
      </div>
      <div
        v-if="signStatus === 'signUp'"
        class="form-each"
        :class="{ invalidStyle: inputMemberIdValid === 'Invalid' }"
      >
        <label for="account">Member Id</label>
        <span v-if="inputMemberIdValid === 'Invalid'" class="invalid-warning">
          (Please Input Valid Id!)
        </span>
        <input
          name="account"
          id="account"
          type="text"
          v-model.trim="memberId"
          @blur="checkNormalValid"
        />
      </div>
      <div
        class="form-each"
        :class="{ invalidStyle: inputPasswordValid === 'Invalid' }"
      >
        <label for="password">Password</label>
        <span v-if="inputPasswordValid === 'Invalid'" class="invalid-warning">
          (Please Input Valid Password!)
        </span>
        <input
          name="password"
          id="password"
          type="password"
          v-model.trim="password"
          @blur="checkNormalValid"
        />
      </div>
      <div
        v-if="signStatus === 'signUp'"
        class="form-each"
        :class="{ invalidStyle: inputBirthValid === 'Invalid' }"
      >
        <label for="birth">Birth (YYYY/MM/DD)</label>
        <span v-if="inputBirthValid === 'Invalid'" class="invalid-warning">
          (Please Input Valid Birth!)
        </span>
        <input
          name="birth"
          id="birth"
          type="date"
          v-model.trim="birth"
          @blur="checkNormalValid"
        />
      </div>
      <div
        v-if="signStatus === 'signUp'"
        class="form-each"
        :class="{ invalidStyle: inputLocationValid === 'Invalid' }"
      >
        <label for="location">Location</label>
        <span v-if="inputLocationValid === 'Invalid'" class="invalid-warning">
          (Please Input Valid Location!)
        </span>
        <input
          name="location"
          id="location"
          type="text"
          v-model.trim="location"
          @blur="checkNormalValid"
        />
        <p v-if="allowSignUp === false">
          Please fill the form correctly to Sign Up
        </p>
      </div>
      <base-button v-if="signStatus === 'signUp'" :link="false" @click="signUp"
        >Sign Up</base-button
      >
      <base-button v-else :link="false" @click="signIn">Sign In</base-button>
      <base-button :link="false" mode="minor" @click="switchSignStatus">{{
        switchText
      }}</base-button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
form {
  padding: 2rem 7rem;
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
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }
  input {
    width: 100%;
  }
}

.invalid-warning {
  color: red;
}

input {
  &[type="email"],
  &[type="password"],
  &[type="text"],
  &[type="date"] {
    @include input-style;
    background-size: 1.5rem;
  }
  &[type="email"] {
    background-image: url("../../assets/images/forall/email.svg");
  }
  &[type="password"] {
    background-image: url("../../assets/images/forall/key.svg");
  }
  &[type="text"] {
    background-image: url("../../assets/images/forall/user-without-circle.svg");
  }
  &[type="date"] {
    background-image: url("../../assets/images/forall/birthday-cake.svg");
    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  }
}
p.darkMode {
  color: $white;
}

#location {
  background-image: url("../../assets/images/forall/pin.svg");
}

.invalidStyle {
  input {
    border-color: red;
  }
  label {
    color: red;
  }
}

@mixin keyframes($autofill) {
  @-webkit-keyframes #{$autofill} {
    @content;
  }
  @-moz-keyframes #{$autofill} {
    @content;
  }
  @-o-keyframes #{$autofill} {
    @content;
  }
  @keyframes #{$autofill} {
    @content;
  }
}

@mixin animation($str) {
  -webkit-animation: #{$str};
  -moz-animation: #{$str};
  -ms-animation: #{$str};
  -o-animation: #{$str};
  animation: #{$str};
}

@include keyframes(autofill) {
  to {
    background-image: url("../../assets/images/forall/email.svg") !important;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: $black;
  -webkit-box-shadow: 0 0 0px 1000px #fffff0 inset;
  @include animation("autofill 1s");
  // -webkit-animation-fill-mode: both;
  background-image: url("../../assets/images/forall/email.svg") !important;
}
button {
  margin: 1.5rem 2.5rem 1rem 1rem;
}
</style>
<script>
export default {
  data() {
    return {
      signStatus: "signUp",
      signSuccess: false,

      email: "",
      memberId: "",
      password: "",
      birth: "",
      location: "",

      isLoading: false,

      error: "",

      allowSignUp: false,
      inputMailInvalid: "pending",
      inputMemberIdValid: "",
      inputPasswordValid: "",
      inputBirthValid: "",
      inputLocationValid: "",

      showDialog: false,
      allowLeave: false,
    };
  },
  computed: {
    darkMode() {
      if (this.$store.getters.theme === "light") {
        return true;
      } else {
        return false;
      }
    },
    switchText() {
      if (this.signStatus === "signUp") {
        return "Switch to Sign In";
      } else {
        return "Switch to Sign Up";
      }
    },
  },
  methods: {
    async signUp() {
      console.log("sign up");
      this.isLoading = true;
      this.checkNormalValid();
      if (this.allowSignUp === false) {
        console.log("return without upload");
        this.isLoading = false;
        return;
      }
      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
          memberId: this.memberId,
          birth: this.birth,
          location: this.location,
        });
      } catch (error) {
        this.error = error;
      }

      this.isLoading = false;

      this.memberId = "";
      this.email = "";
      this.password = "";
      this.birth = "";
      this.location = "";
      //註冊完成後離開頁面不會出現跳窗並直接跳轉至 member
      // this.signSuccess = true;
      // this.$router.push('/member');
    },
    switchSignStatus() {
      if (this.signStatus === "signUp") {
        this.signStatus = "signIn";
      } else {
        this.signStatus = "signUp";
      }
    },
    async signIn() {
      console.log("sign in");
      this.isLoading = true;
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.isLoading = false;

      this.email = "";
      this.password = "";
      //登入完成後離開頁面不會出現跳窗並直接跳轉至 member
      if(this.$store.state.auth.userId) {
        this.signSuccess = true;
        // this.$router.push('/member');
      }
    },
    //Function about input validation
    checkNormalValid() {
      this.allowSignUp = false;
      if (this.email === "" || !this.email.includes("@")) {
        this.inputMailInvalid = "Invalid";
        this.allowSignUp = false;
        return;
      } else {
        this.inputMailInvalid = "Valid";
        this.allowSignUp = true;
      }
      if (this.memberId === "") {
        this.inputMemberIdValid = "Invalid";
        this.allowSignUp = false;
        return;
      } else {
        this.inputMemberIdValid = "Valid";
        this.allowSignUp = true;
      }
      if (this.password === "" || this.password.length < 7) {
        this.inputPasswordValid = "Invalid";
        this.allowSignUp = false;
        return;
      } else {
        this.inputPasswordValid = "Valid";
        this.allowSignUp = true;
      }
      if (this.birth === "") {
        this.inputBirthValid = "Invalid";
        this.allowSignUp = false;
        return;
      } else {
        this.inputBirthValid = "Valid";
        this.allowSignUp = true;
      }
      if (this.location === "") {
        this.inputLocationValid = "Invalid";
        this.allowSignUp = false;
        return;
      } else {
        this.inputLocationValid = "Valid";
        this.allowSignUp = true;
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.allowLeave = true;
    },
    closeDialogError() {
      this.error = "";
    },
  },
  beforeRouteLeave(_to, _from, next) {
    if (this.signSuccess) {
      // sign up success
      next();
    } else if (!this.showDialog && this.allowLeave) {
      // close the warn dialog
      next();
    } else {
      this.showDialog = true;
    }
  },
};
</script>
