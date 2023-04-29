<template>
  <h1>Pass Data to child component</h1>
  <ChildComponents name="dev" :user="user" :getData="getData" />
</template>

<script>
import ChildComponents from "./ChildComponents.vue";
export default {
  name: "HomeComponents",
  components: {
    ChildComponents,
  },
  data() {
    return {
      user: { name: "peter", email: "peter@test.com" },
    };
  },

  methods: {
    getData() {
      console.warn("parent function called");
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
