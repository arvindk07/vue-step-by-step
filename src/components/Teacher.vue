<template>
  <h1>Teacher Data</h1>
  <p>Name: {{ name }}</p>
  <p>Subject: {{ subject }}</p>
</template>

<script>
export default {
  name: "TeacherVue",
  props: {
    name: String,
    subject: String,
  },
};
</script>
