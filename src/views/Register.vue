<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">Already have an acoount? 
        <router-link class="router-link" :to="{name: 'Register'}">
          Register
        </router-link>
      </p>
        <h2>Create Your FireBlog Account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First Name" v-model="firstName">
            <user class="icon"/>
          </div>  

          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastName">
            <user class="icon"/>
          </div>  

          <div class="input">
            <input type="text" placeholder="Username" v-model="username">
            <user class="icon"/>
          </div> 

          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <email class="icon"/>
          </div> 

          <div class="input">
            <input type="password" placeholder="Password" v-model="password">
            <password class="icon"/>
          </div> 
        <div v-show="error" class="error">{{this.errorMsg}}</div>
        </div>
        
        <button @click.prevent="register">Sign Up</button>

        <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
//import 'firebase/compat/firestore'
import db from "../firebase/firebaseInit"

export default {
  name: 'Register',
  components:{email, password, user},
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: false,
      errorMsg: ""
    }
  },
  methods: {
    async register() {
      if (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== "" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        this.error = false
        this.errorMsg = ""
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
        const result = await createUser
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email
        })
        console.log("before push")
        this.$router.push({
          name: 'Home'
        })
        console.log("after push")
        return;
      }
      this.error=true
      this.errorMsg="Plase fill out all the fields"
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>