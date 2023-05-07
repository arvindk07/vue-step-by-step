<template>
  <h1>Slot</h1>
  <ChildVue>
    <template v-slot:header>
      <h1>Peter</h1>
    </template>
    <template v-slot:content>
      <p>Vue Products</p>
    </template>
    <template v-slot:footer>
      <button>Buy Now</button>
    </template>
  </ChildVue>
  <ChildVue>
    <template v-slot:header>
      <h1>Peter England</h1>
    </template>
    <template v-slot:content>
      <p>Vue Products</p>
    </template>
    <template v-slot:footer> </template>
  </ChildVue>
</template>

<script>
import ChildVue from "./Child.vue";

export default {
  name: "HomeComponents",
  components: {
    ChildVue,
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
