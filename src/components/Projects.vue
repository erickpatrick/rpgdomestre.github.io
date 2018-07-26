<template>
  <section class="section section--primary projects">
    <h4>Projetos</h4>
    <div class="project" v-for="(project, index) in projects" :key="index">
      <h6>{{ project.name }}</h6>
      <p>{{ project.description }}</p>
      <router-link :to="project.link">Visitar</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Alter Ego",
          description:
            "É o nosso projeto mais recente. Ele é dividido em três partes: Sistema, Terra 2037 e Dackers.",
          link: "/alter-ego"
        },
        {
          name: "Weekly",
          description:
            "A Weekly é a curadoria de artigos, citações, imagens e links interessantes sobre o mundo do RPG para ajudar jogadores e mestres.",
          link: "/weekly"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project {
  padding: 2em 0;
}
</style>
