<template>
  <h1>Props</h1>
  <StudentVue name="dev" />
  <TeacherVue name="Khan Sir" subject="GS" />
</template>

<script>
import StudentVue from "./Student.vue";
import TeacherVue from "./Teacher.vue";
export default {
  name: "HomeComponents",
  components: {
    StudentVue,
    TeacherVue,
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
.green {
  background-color: green;
  padding: 10px;
}
.otherclass {
  font-size: 50px;
}
.err {
  color: purple;
}
</style>
