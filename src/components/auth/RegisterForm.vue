<template>
  <div class="container registerForm">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First name</span>
            <input type="text" v-model="firstName" placeholder="Enter your first name" required>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" v-model="lastName" placeholder="Enter your last name" required>
          </div>
          <div class="input-box">
            <span class="details">Date of birth</span>
            <input type="date" v-model="dateOfBirth" placeholder="dd/mm/yyyy" required>
          </div>
          <div class="input-box">
            <span class="details">Country</span>
            <input type="text" v-model="country" placeholder="Enter your country" required>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" v-model="email" placeholder="Enter your email" required>
          </div>
          <div class="input-box">
            <span class="details">Address</span>
            <input type="text" v-model="address" placeholder="Enter your address" required>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" v-model="password" placeholder="Enter your password" required>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required>
          </div>
        </div>
        <div class="button">
          <input type="button" value="Register" @click="signUp">
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "RegisterForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      country: "",
      address: "",
      dateOfBirth: "",
      email: "",
      password: "",
    }
  },
  methods: {
    signUp() {
      let URL = "/user/signup"
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        country: this.country,
        address: this.address,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        password: this.password
      }
      this.$api.post(URL, user)
        .then(response => {
          console.log("La respuesta de signup es: " + JSON.stringify(response))

          this.$q.notify({
            message: "Registro exitoso",
            color: "positive",
            position: "bottom",
            timeout: 5000
          })
          this.$router.push("/")
        }).catch(error => {
          console.log("El error es: " + JSON.stringify(error))
          this.$q.notify({
            message: "Ocurrió un error...",
            color: "negative",
            position: "top",
            timeout: 5000
          })
        })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.registerForm {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two,
#dot-3:checked~.category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}

form .button {
  height: 45px;
  margin: 35px 0
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media(max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  form .category {
    width: 100%;
  }

  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}

@media(max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}
</style>
