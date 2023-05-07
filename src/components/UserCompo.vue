<template>
  <h2 ref="user">User Components</h2>
</template>
<script>
export default {
  name: "UserCompo",

  beforeUnmount() {
    console.log("before Unmount", this.$refs["user"]);
  },
  unmounted() {
    console.log("Unmounted", this.$refs["user"]);
  },
};
</script>
