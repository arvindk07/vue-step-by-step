<template>
  <h2>User</h2>
  <button v-on:click="getUser(userName)">Send User Name</button>
</template>
<script>
export default {
  name: "UseVue",
  data() {
    return {
      userName: "child to parent",
    };
  },
  props: {
    getUser: Function,
  },
};
</script>
