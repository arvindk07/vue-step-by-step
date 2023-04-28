<template>
  <h1>Get Input Field Value</h1>
  <input type="text" placeholder="Enter Email" v-model="email" /> <br />
  <br />
  <input type="password" placeholder="Password" v-model="password" /><br />
  <br />
  <button v-on:click="getData()" type="button">get values</button>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    getData() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
