<template>
  <h1>Html Binding</h1>
  <h2>{{ text }}</h2>
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
</template>

<script>
export default {
  name: "HomeComponents",
  components: {},
  data() {
    return {
      text: "Arvind Dev",
      tag: "<h1>Arvind Hacker</h1>",
      tag2: "<h1>Kyle is my favourite Youtuber</h1>",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
ul {
  list-style: none;
}
li {
  margin: 20px;
}
</style>
