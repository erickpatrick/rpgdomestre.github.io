<template>
  <div class="section section--primary">Em construção</div>
</template>

<script>
export default {
  name: "Weekly",
  mounted() {
    this.$emit("change:header", {
      title: "Weekly",
      subtitle: "Publicações interessantes curadas semanalmente.",
      showNavigation: false,
      showSubheader: true
    });
  }
};
</script>
