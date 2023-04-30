<template>
  <h1>Simple form</h1>
  <p>{{ form }}</p>
  <form>
    <label>Email: </label>
    <input type="text" placeholder="Enter Email" v-model="form.email" />
    <br /><br />
    <label>Password: </label>
    <input
      type="password"
      placeholder="Enter Password"
      v-model="form.password"
    />
    <br />
    <br />
    <select v-model="form.country">
      <option>India</option>
      <option>USA</option>
      <option>Astrailiya</option>
    </select>
    <br />
    <br />
    <h3>Technology</h3>
    <input type="checkbox" value="react" v-model="form.technology" />
    <label> React </label>
    <br />
    <br />
    <input type="checkbox" value="vue" v-model="form.technology" />
    <label> Vue </label>
    <br />
    <br />
    <input type="checkbox" value="next" v-model="form.technology" />
    <label> Next </label>
    <br />
    <br />
    <input type="checkbox" value="nuxt" v-model="form.technology" />
    <label> Nuxt </label>
    <br />
    <br />
    <input type="radio" value="male" name="gender" v-model="form.gender" />
    <label> Male </label>
    <br />
    <br />
    <input type="radio" value="female" name="gender" v-model="form.gender" />
    <label> Female </label>
    <br />
    <br />

    <button v-on:click="login" type="button">Login</button>
  </form>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: "",
      },
    };
  },
  methods: {
    login() {
      console.log("login data: ", this.form);
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
