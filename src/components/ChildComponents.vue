<template>
  <h2>Child Component</h2>
  <p>{{ name }}</p>
  <p>{{ user.name }}</p>
  <p>{{ user.email }}</p>
  <button v-on:click="getData">Click</button>
</template>
<script>
export default {
  name: "ChildComponents",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
};
</script>
