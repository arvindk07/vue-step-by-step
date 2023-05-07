<template>
  <h1>Slot</h1>
  <ChildVue>
    <h2>Slot 1</h2>
  </ChildVue>
  <ChildVue>
    <a href="#">Slot 2</a>
  </ChildVue>
  <ChildVue>
    <img
      src="https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2021%2F08%2FLead_Rashmika-Mandanna3.jpg?auto=format%2Ccompress&fit=max&w=1200"
      alt="IMg"
    />
  </ChildVue>
  <ChildVue>default Value</ChildVue>
</template>

<script>
import ChildVue from "./Child.vue";

export default {
  name: "HomeComponents",
  components: {
    ChildVue,
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
