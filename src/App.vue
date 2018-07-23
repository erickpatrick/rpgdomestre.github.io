<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "RPGdM",
  components: {
    Header
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

  @media screen and (min-width: 40em) {
    font-size: 3em;
  }

  @media screen and (min-width: 60em) {
    font-size: 3.5em;
  }
}

h2 {
  font-size: 2.25em;

  @media screen and (min-width: 40em) {
    font-size: 2.75em;
  }

  @media screen and (min-width: 60em) {
    font-size: 3.25em;
  }
}

h3 {
  font-size: 2em;

  @media screen and (min-width: 40em) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 60em) {
    font-size: 3em;
  }
}
h4 {
  font-size: 1.75em;

  @media screen and (min-width: 40em) {
    font-size: 2.25em;
  }

  @media screen and (min-width: 60em) {
    font-size: 2.75em;
  }
}

h5 {
  font-size: 1.5em;

  @media screen and (min-width: 40em) {
    font-size: 2em;
  }

  @media screen and (min-width: 60em) {
    font-size: 2.5em;
  }
}

h6 {
  font-size: 1.25em;

  @media screen and (min-width: 40em) {
    font-size: 1.75em;
  }

  @media screen and (min-width: 60em) {
    font-size: 2.25em;
  }
}

p {
  font-size: 1em;
  line-height: 1.5em;

  @media screen and (min-width: 40em) {
    font-size: 1.25em;
  }

  @media screen and (min-width: 60em) {
    font-size: 1.5em;
  }
}

#app {
  margin: 5%;
  width: 90%;

  @media screen and (min-width: 50em) {
    margin: 2.5em auto;
    max-width: 50em;
  }
}
</style>
