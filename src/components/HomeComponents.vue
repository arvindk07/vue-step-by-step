<template>
  <h1>Before UnMount and UnMounted (life cycle method)</h1>
  <button @click="show = !show">Toggle</button>
  <UserCompo v-if="show" />
</template>

<script>
import UserCompo from "./UserCompo.vue";
export default {
  name: "HomeComponents",

  components: {
    UserCompo,
  },

  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
