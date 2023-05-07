<template>
  <h1>
    Before Update and Updated (life cycle method)
    <h2 ref="count">{{ counter }}</h2>
    <button @click="counter = counter + 1">Update Count</button>
  </h1>
</template>

<script>
export default {
  name: "HomeComponents",

  data() {
    return {
      counter: 0,
    };
  },
  beforeUpdate() {
    console.warn("beforeUpdate", this.$refs["count"].textContent);
  },
  updated() {
    console.warn("update", this.$refs["count"].textContent);
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
