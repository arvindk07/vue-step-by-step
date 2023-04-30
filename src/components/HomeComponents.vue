<template>
  <h1>ReUsable Components</h1>
  <ul>
    <li v-for="item in users" :key="item.name">
      <ReusableComponents :data="item" :getData="getData" />
    </li>
  </ul>
</template>

<script>
import ReusableComponents from "./ReusableComponents.vue";
export default {
  name: "HomeComponents",
  components: {
    ReusableComponents,
  },

  data() {
    return {
      users: [
        { name: "peter", email: "peter@test.com" },
        { name: "sam", email: "sam@test.com" },
        { name: "brad", email: "brad@test.com" },
        { name: "traversy", email: "traversy@test.com" },
        { name: "john", email: "john@test.com" },
      ],
    };
  },

  methods: {
    getData(name) {
      alert(name);
    },
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
