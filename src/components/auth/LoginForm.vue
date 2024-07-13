<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="user.email" label="Your email *" hint="Email" />

      <q-input filled v-model="user.password" label="Your password *" hint="Password" />

      <div>
        <q-btn label="Login" type="button" color="primary" @click="signIn" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    signIn() {
      let URL = "/user/signin"
      this.$api.post(URL, this.user)
        .then(response => {
          this.$q.notify({
            message: "Bienvenido....",
            color: "positive",
            position: "bottom",
            timeout: 5000
          })
          localStorage.setItem("userData", JSON.stringify(response.data))
          this.$router.push("/dashboard/product")
        }).catch(error => {
          console.log(JSON.stringify(error))
        })
    }
  }
}

</script>

<style></style>
