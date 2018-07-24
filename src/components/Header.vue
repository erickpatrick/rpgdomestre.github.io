<template>
    <header>
        <section v-if="showSubheader" class="section section--sub-heading">
            <router-link to="/"><strong>RPG do Mestre</strong></router-link> apresenta
        </section>
        <h1>{{ title }}</h1>
        <h5>{{ subtitle }}</h5>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    },
    showSubheader: {
      required: true,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin: 6rem 0 0;

  .section--sub-heading,
  .section--sub-heading a {
    padding: 0;
    font-size: 1em;
  }
}

h1 {
  color: #1e3760;
}
</style>
