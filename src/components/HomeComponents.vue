<template>
  <h1>
    Before Mount and Mounted (life cycle method)
    <h2>{{ name }}</h2>
  </h1>
</template>

<script>
export default {
  name: "HomeComponents",

  data() {
    return {
      name: "Dev",
    };
  },
  beforeMount() {
    console.warn("beforeMount", this.$el);
  },
  mounted() {
    console.warn("Mounted", this.$el);
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
