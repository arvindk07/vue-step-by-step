<template>
  <h1>name:{{ getName("peter") }}</h1>
  <h1>name2:{{ getName("crush") }}</h1>
  <h2>All Data:{{ getData().name }}</h2>
  <h2>All Data:{{ getData().email }}</h2>
</template>

<script>
export default {
  name: "HomeComponents",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "dev@gmail11.com",
      mobile: "32573776",
    };
  },
  methods: {
    getName(a) {
      return a;
    },
    getData() {
      return {
        name: "dev",
        email: this.email,
      };
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
