<template>
  <div>
    <h3>Dev</h3>
    <h3>Brad</h3>
    <h3>Kyle</h3>
    <h3>{{ data }}</h3>
  </div>
  <!-- <h3 v-bind="$attrs">Hello</h3> -->
</template>
<script>
export default {
  name: "ChildVue",
  //   inheritAttrs: false,
  props: {
    data: String,
  },
};
</script>
