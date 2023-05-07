<template>
  <h2>React Content</h2>
  <button @click="reacttab = 'HigherOrder'">Higher Order</button>
  <button @click="reacttab = 'ReduxComponents'">Redux Components</button>
  <component :is="reacttab" />
</template>
<script>
import HigherOrder from "./HigherOrder.vue";
import ReduxComponents from "./ReduxComponents.vue";
export default {
  name: "ReactVue",
  components: {
    ReduxComponents,
    HigherOrder,
  },
  data() {
    return {
      reacttab: "HigherOrder",
    };
  },
};
</script>
