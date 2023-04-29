<template>
  <h1>for loop</h1>
  <ul>
    <li>
      {{ technology }}
    </li>
    <li v-for="item in technology" :key="item">{{ item }}</li>
  </ul>
  <br />
  <ul>
    <li v-for="item in users" :key="item.name">
      Name:{{ item.name }} and Email: {{ item.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      technology: ["html", "react", "vue", "nuxt"],
      users: [
        { name: "dev", email: "dev@gmail.com" },
        { name: "kyle", email: "kyle@gmail.com" },
        { name: "brad", email: "brad@gmail.com" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
