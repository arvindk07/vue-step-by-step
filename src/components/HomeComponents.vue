<template>
  <h1>Before Created and created (life cycle method)</h1>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  name: "HomeComponents",

  data() {
    console.warn("created");
    return {
      name: "Dev",
    };
  },

  beforeCreate() {
    alert("before created");
  },
  created() {
    this.name = "hello dev";
    alert("created");
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
