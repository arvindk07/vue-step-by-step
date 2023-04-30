<template>
  <h2>Student Data</h2>
  <p>Name: {{ name }}</p>
</template>
<script>
export default {
  name: "StudentVue",
  props: {
    name: String,
  },
};
</script>
