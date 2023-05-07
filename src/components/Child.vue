<template>
  <div class="cardStyle">
    <header>
      <slot name="header"></slot>
    </header>
    <content>
      <slot name="content"></slot>
    </content>
    <footer>
      <slot name="footer">
        <button>Click Me</button>
      </slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "ChildVue",
};
</script>

<style>
.cardStyle {
  border: 1px solid purple;
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
}
</style>
