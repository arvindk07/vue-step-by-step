<template>
  <h1>class Binding</h1>
  <h2 :class="applyStyle">Home Components</h2>
  <button v-on:click="colorfull = !colorfull">Aplly Style</button>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      colorfull: true,
    };
  },
  computed: {
    applyStyle() {
      return {
        green: this.colorfull,
        err: true,
        otherclass: true,
      };
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
.green {
  background-color: green;
  padding: 10px;
}
.otherclass {
  font-size: 50px;
}
.err {
  color: purple;
}
</style>
