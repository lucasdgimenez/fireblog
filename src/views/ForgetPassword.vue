<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import Modal from "../components/Modal"
import Loading from "../components/Loading.vue"

export default {
  name: "ForgotPassword",
  components:{email, Modal, Loading},
  data() {
    return {
      email: null,
      modalActive: false,
      modalmessage: "",
      loading: null
    }
  },
  methods:{
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>