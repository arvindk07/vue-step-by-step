<template>
  <h1>Form Modifire</h1>
  <input type="number" v-model.number.lazy="data" />
  <p>Data is: {{ typeof data }}</p>
  <p>Data is: {{ data }}</p>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      data: "",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
