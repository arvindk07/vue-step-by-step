<template>
  <h1>Computed Property</h1>
  <h2>Normal Method</h2>
  {{ doller * rupeeVal - discount }}
  {{ doller * rupeeVal - discount }}
  {{ doller * rupeeVal - discount }}
  {{ doller * rupeeVal - discount }}

  <h2>Computed Property</h2>
  {{ getResults }}
  {{ getResults }}
  {{ getResults }}
  {{ getResults }}

  <h2>Using Method</h2>
  {{ getResultsMethod() }}
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      doller: 100,
      rupeeVal: 82,
      discount: 10,
    };
  },
  // using methods
  methods: {
    getResultsMethod() {
      return this.doller * this.rupeeVal - this.discount;
    },
  },

  // computed property
  computed: {
    getResults() {
      return this.doller * this.rupeeVal - this.discount;
    },
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
