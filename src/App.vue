<template>
  <router-link to="/">Home</router-link> <br />
  <router-link to="/profile">Profile</router-link><br />
  <router-link to="/login">Login</router-link><br />
  <router-link to="/user">User</router-link><br />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
