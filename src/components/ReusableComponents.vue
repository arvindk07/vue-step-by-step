<template>
  <!-- <h2>users components</h2> -->
  <div class="components">
    <h2>{{ data.name }}</h2>
    <p>{{ data.email }}</p>
    <button v-on:click="getData(data.name)">Alert Name</button>
  </div>
</template>

<script>
export default {
  name: "ReusableComponents",
  props: {
    data: Object,
    getData: Function,
  },
};
</script>

<style scoped>
.components {
  display: flex;
  margin: 0;
  color: yellowgreen;
  background: purple;
  padding: 20px;
}
</style>
