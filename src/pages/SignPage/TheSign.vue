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
      :content="error"
    >
    </base-dialog>
    <form :class="{ darkMode: darkMode }" @click.prevent>
      <h2 v-if="signStatus === 'signUp'">Sign Up</h2>
      <h2 v-else>Sign In</h2>
      <div
        class="form-each"
        :class="{ invalidStyle: inputMailInvalid === 'Invalid' }"
      >
        <label for="email">Email</label>
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
        <label for="account">Member Name</label>
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
          (At least 7 characters!)
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
        <label for="birth">Birth</label>
        <span v-if="inputBirthValid === 'Invalid'" class="invalid-warning">
          Valid Birth(YYYY/MM/DD)!
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
        <input
          name="location"
          id="location"
          type="text"
          v-model.trim="location"
          @blur="checkNormalValid"
        />
      </div>
      <!-- <p v-if="allowSignUp === false">
        Please fill the form correctly to Sign Up
      </p> -->
      <div class="btn-container">
        <base-button v-if="signStatus === 'signUp'" :link="false" @click="signUp">Sign Up</base-button>
        <base-button v-else :link="false" @click="signIn">Sign In</base-button>
        <base-button :link="false" mode="minor" @click="switchSignStatus">{{ switchText }}</base-button>
      </div>
      
    </form>
  </div>
</template>
<style lang="scss" scoped>
form {
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: $box-shadow;
  // width: 45%;
  // min-width: 375px;
  width: 500px;
  margin: 1rem auto;
  @include flex-model($dir: column, $align: center);
  h2 {
    text-align: center;
  }
}
.form-each {
  margin: 1.5rem 3rem;
  width: 300px;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    display: block;
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

.btn-container {
  @include flex-model($content: space-evenly);
  margin-bottom: $distance-window;
}
// @media(max-width: 1037px) {
//   form {
//     width: 60%;
//   }
// }
// @media(max-width: 847px) {
//   form {
//     width: 80%;
//   }
// }
@media (max-width: 517px) {
  form {
    width: 100%;
    margin: 0;
    margin-bottom: $distance-window;
  }
}
</style>
<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(['userId','memEmail']),
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
      this.isLoading = true;
      this.checkNormalValid();
      if (this.allowSignUp === false) {
        console.log("return without upload");
        this.error = "Your data is invalid please check the form then send it again!"
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
        await this.signIn();
      } catch (error) {
        this.error = error.response.data.error.message;
      }

      this.isLoading = false;

      this.memberId = "";
      this.email = "";
      this.password = "";
      this.birth = "";
      this.location = "";
      //註冊完成後離開頁面不會出現跳窗並直接跳轉至 member
    },
    switchSignStatus() {
      if (this.signStatus === "signUp") {
        this.signStatus = "signIn";
      } else {
        this.signStatus = "signUp";
      }
    },
    async signIn() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.autoPush();
      }catch(error) {
        this.error = error.response.data.error.message;
      }
        this.isLoading = false;

      this.email = "";
      this.password = "";
      //登入完成後離開頁面不會出現跳窗並直接跳轉至 member
    },
    //auto push to member page
    autoPush() {
      if(this.$store.state.auth.userId) {
        this.signSuccess = true; 
        this.$router.push('/member/' + this.email + '/profile');
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
    }else if(this.userId) {
      // already login
      next();
    }else {
      this.showDialog = true;
    }
  },
};
</script>
