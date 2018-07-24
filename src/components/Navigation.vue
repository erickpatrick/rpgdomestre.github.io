<template>
  <ul>
    <router-link tag="li" to="/">
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/sobre">
      <a>Sobre</a>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  margin-bottom: 4em;
  padding-left: 0;
  list-style: none;
  text-align: center;

  li {
    display: inline-block;
    padding: 1em;
  }
}
</style>
