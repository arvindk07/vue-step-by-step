<template>
  <h1 v-if="show">if else Conditions</h1>
  <h1 v-else>else Conditions</h1>
  <button @click="show = !show">toggle</button>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      show: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
