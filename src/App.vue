<template>
  <div id="app">
    <Header :title="title" :subtitle="subtitle" />
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "RPGdM",
  components: {
    Header: () => import("@/components/Header.vue"),
    Footer: () => import("@/components/Footer.vue"),
    Navigation: () => import("@/components/Navigation.vue")
  },
  data() {
    return {
      title: "RPG do Mestre",
      subtitle: "Onde o mestre cria, reinventa, modifica e publica RPG."
    };
  }
};
</script>

<style lang="scss">
html {
  font-size: 20px;
}
body {
  margin: 0;
  font: normal normal normal 1rem/1 "Palatino Linotype", Palatino, Palladio,
    "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style",
    "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond",
    "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook",
    "Century Schoolbook L", Georgia, serif;
  overflow-x: hidden;
}

a {
  color: #1e3760;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 1rem 0;
}

h1 {
  font-size: 2.5em;

  @media screen and (min-width: 60em) {
    font-size: 3.5em;
  }
}

h2 {
  font-size: 2.25em;

  @media screen and (min-width: 60em) {
    font-size: 3.25em;
  }
}

h3 {
  font-size: 2em;

  @media screen and (min-width: 60em) {
    font-size: 3em;
  }
}
h4 {
  font-size: 1.75em;

  @media screen and (min-width: 60em) {
    font-size: 2.75em;
  }
}

h5 {
  font-size: 1.5em;

  @media screen and (min-width: 60em) {
    font-size: 2.5em;
  }
}

h6 {
  font-size: 1.25em;

  @media screen and (min-width: 60em) {
    font-size: 2.25em;
  }
}

p,
a {
  font-size: 1rem;
  line-height: 1.5rem;

  @media screen and (min-width: 60em) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
}

#app {
  margin: 0 5% 3rem;
  width: 90%;

  @media screen and (min-width: 50em) {
    margin: 0 auto 3rem;
    max-width: 50em;
  }
}

section {
  padding: 6em 0 3em;
  position: relative;

  &:before,
  &:after {
    content: " ";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
}
</style>
