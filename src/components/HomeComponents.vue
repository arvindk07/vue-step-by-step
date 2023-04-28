<template>
  <h1>home page {{ msg }}</h1>
  <h2>{{ "hello".length }}</h2>
  <p>{{ email }}</p>
  <p>{{ (mobile = 9999) }}</p>
  <p>{{ mobile == 9999 }}</p>
  <h2>{{ getName("webdev") }}</h2>
</template>

<script>
export default {
  name: "HomeComponents",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "dev@gmail.com",
      mobile: "32573776",
      getName: function (a) {
        return a;
      },
    };
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
