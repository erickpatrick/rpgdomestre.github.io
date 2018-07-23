<template>
  <div class="home">
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Projects
  }
};
</script>
