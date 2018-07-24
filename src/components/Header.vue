<template>
    <header>
        <h1>{{ title }}</h1>
        <h6>{{ subtitle }}</h6>
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
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin: 6rem 0 3em;

  @media screen and (min-width: 50em) {
    margin-bottom: 6em;
  }
}

h1 {
  color: #1e3760;
}
</style>
