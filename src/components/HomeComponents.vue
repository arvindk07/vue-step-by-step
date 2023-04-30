<template>
  <h1>Ref</h1>
  <input type="text" ref="input" />
  <button v-on:click="getData">Click me</button>
</template>

<script>
export default {
  name: "HomeComponents",
  methods: {
    getData() {
      this.$refs.input.focus();
      let val = this.$refs.input.value;
      console.log(val);
      this.$refs.input.style.color = "red";
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
