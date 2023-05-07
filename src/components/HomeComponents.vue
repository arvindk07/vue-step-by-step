<template>
  <h1>Dynamic Components</h1>
  <button @click="tab = 'JavaVue'">Load Java</button>
  <button @click="tab = 'ReactVue'">Load React</button>
  <button @click="tab = 'NodeVue'">Load Node</button>
  <component :is="tab" />
</template>

<script>
import ReactVue from "./React.vue";
import NodeVue from "./Node.vue";
import JavaVue from "./Java.vue";
export default {
  name: "HomeComponents",
  components: {
    ReactVue,
    NodeVue,
    JavaVue,
  },

  data() {
    return {
      tab: "JavaVue",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
