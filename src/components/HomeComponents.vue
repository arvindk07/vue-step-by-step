<template>
  <h1>Non Props</h1>
  <ChildVue data="data" id="cmp" />
</template>

<script>
import ChildVue from "./ChildVue.vue";
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
