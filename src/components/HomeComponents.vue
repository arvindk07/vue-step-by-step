<template>
  <h1 v-on:mousemove="getConsole()">Home Components</h1>
  <button v-on:click="getData('Button 1 CLicked')">Click Me</button>
  <button @click="getData('Button 2 CLicked')">Click Me</button>
  <button @dblclick="getData('Button dubble CLicked')">dubble Click Me</button>
  <h2>{{ count }}</h2>
  <button v-on:click="getIncreament()">increament</button>
  <button v-on:click="count--">increament</button>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getData(data) {
      alert(data);
    },
    getConsole() {
      console.log("mouse move");
    },
    getIncreament() {
      this.count = this.count + 1;
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
