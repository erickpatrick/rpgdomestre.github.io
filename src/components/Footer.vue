<template>
  <footer>
    <p>&copy; 2009-{{ today }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    today() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>
