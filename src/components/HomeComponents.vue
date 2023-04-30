<template>
  <h1>Send Data child to parent</h1>
  {{ childUser }}
  <UserVue :getUser="getUserName" />
</template>

<script>
import UserVue from "./User.vue";
export default {
  name: "HomeComponents",
  data() {
    return {
      childUser: "",
    };
  },
  components: {
    UserVue,
  },
  methods: {
    getUserName(name) {
      this.childUser = name;
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
