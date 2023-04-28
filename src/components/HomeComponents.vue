<template>
  <h1>Two way binding</h1>
  <input type="text" v-model="count" />
  <h2>{{ count }}</h2>
</template>

<script>
export default {
  name: "HomeComponents",

  data() {
    return {
      count: 10,
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
