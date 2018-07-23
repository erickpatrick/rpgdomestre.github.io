<template>
    <header>
        <h1>RPG do Mestre</h1>
        <h6>Onde o mestre cria, reinventa, modifica e publica RPG.</h6>
    </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 2.5rem;

  @media screen and (min-width: 40em) {
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 60em) {
    margin-bottom: 4rem;
  }
}

h1 {
  margin-bottom: 1rem;
  color: #1e3760;
}
</style>
