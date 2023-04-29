<template>
  <h1>Get Checkbox and radio type</h1>

  <h3>Technologies</h3>
  <input
    type="checkbox"
    value="frontend Developer"
    id="frontent"
    v-model="technology"
  />
  <label for="frontent">Frontend Developer</label> <br />
  <input
    type="checkbox"
    value="Backend Developer"
    id="backend"
    v-model="technology"
  />
  <label for="backend">Backend Developer</label> <br />
  <input
    type="checkbox"
    value="Mern Developer"
    id="mern"
    v-model="technology"
  />
  <label for="mern">Mern Developer</label>

  <br />
  <br />
  <h3>Radio Selection</h3>
  <input type="radio" v-model="who" value="student" name="who" id="student" />
  <label for="student">Student</label><br />
  <input
    type="radio"
    v-model="who"
    value="developer"
    name="who"
    id="developer"
  />
  <label for="developer">Developer</label><br />
  <input type="radio" v-model="who" value="teacher" name="wo" id="teacher" />
  <label for="teacher">Teacher</label><br />
  <h4>Selected Technology:{{ technology }}</h4>
  <h4>Selected Who:{{ who }}</h4>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      technology: [],
      who: [],
    };
  },

  methods: {
    getData() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
