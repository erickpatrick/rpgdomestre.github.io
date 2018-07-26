<template>
    <div class="table-of-contents">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.table-of-contents {
  margin-bottom: 1.5em;
  padding: 1.5em;
  background-color: #f9f9f9;

  @media screen and (min-width: 50em) {
    margin-left: 1.5em;
    float: right;
    max-width: 350px;
  }

  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.25em;
    margin: 1em 0 0.5em 0;
  }

  h6,
  p {
    font-size: 1em;
    line-height: 1.15;
  }

  p {
    margin: 0 0 0.5em 1em;
  }
}
</style>
