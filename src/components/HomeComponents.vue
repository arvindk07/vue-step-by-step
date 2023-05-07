<template>
  <h1>Teleport</h1>
  <Teleport to="#footer">
    <FooterVue />
  </Teleport>
</template>

<script>
import FooterVue from "./Footer.vue";
export default {
  name: "HomeComponents",
  components: {
    FooterVue,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
