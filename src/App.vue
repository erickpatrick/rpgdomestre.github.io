<template>
  <div id="app">
    <Header :title="title" :subtitle="subtitle" :show-subheader="showSubheader" />
    <Navigation v-if="showNavigation" />
    <router-view @change:header="changeHeader"/>
    <Footer />
  </div>
</template>

<script>
const defaultHeader = {
  title: "RPG do Mestre",
  subtitle: "Onde o mestre cria, reinventa, modifica e publica RPG.",
  showNavigation: true,
  showSubheader: false
};

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
      subtitle: "Onde o mestre cria, reinventa, modifica e publica RPG.",
      showNavigation: true,
      showSubheader: false
    };
  },
  methods: {
    changeHeader(payload) {
      "isDefault" in payload
        ? this._setHeaderProperties(defaultHeader)
        : this._setHeaderProperties(payload);
    },
    _setHeaderProperties(data) {
      Object.keys(data).forEach(key => (this[key] = data[key]));
    }
  }
};
</script>

<style lang="scss">
*,
* + * {
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
}

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
  line-height: 1.15;
}

li {
  margin: 0 0 1rem 0;
}

h1 {
  font-size: 2.5em;

  @media screen and (min-width: 60em) {
    font-size: 4.25em;
  }
}

h2 {
  font-size: 2.25em;

  @media screen and (min-width: 60em) {
    font-size: 3.75em;
  }
}

h3 {
  font-size: 2em;

  @media screen and (min-width: 60em) {
    font-size: 3.25em;
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
    font-size: 2.25em;
  }
}

h6 {
  font-size: 1.25em;

  @media screen and (min-width: 60em) {
    font-size: 1.75em;
  }
}

p,
a,
ul {
  font-size: 1rem;
  line-height: 1.5rem;

  @media screen and (min-width: 60em) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
}

blockquote {
  margin: 2em 0;
  border-left: 10px solid #e9e9e9;
  padding: 1em;
  background-color: #f9f9f9;
  font-style: italic;

  @media screen and (min-width: 50em) {
    padding-left: 4em;
    padding-right: 4em;
  }
  
  em {
    font-style: normal;
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

.section {
  padding: 3em 0;
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

  &--primary {
    background-color: #f9f9f9;

    &:before,
    &:after {
      background-color: #f9f9f9;
    }
  }

  &--secondary {
    margin: 0;

    @media screen and (min-width: 60em) {
      margin: 0 -2.5%;
    }

    @media screen and (min-width: 75em) {
      margin: 0 -7.5%;
    }

    @media screen and (min-width: 90em) {
      margin: 0 -12.5%;
    }
  }

  &--columns {
    overflow: hidden;

    section {
      margin-bottom: 2.5em;

      @media screen and (min-width: 60em) {
        width: 30%;
        float: left;

        &:nth-child(2) {
          margin: 0 5%;
        }
      }
    }
  }
}
</style>
