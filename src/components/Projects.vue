<template>
  <section class="projects">
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
            "É o nosso projeto mais recente. Ele é dividido em três partes: Sistema, Cenário e Ficção. Sim, todos tem o mesmo nome, porém, " +
            '"sobrenomes" diferentes. (em breve)',
          link: "/alter-ego"
        },
        {
          name: "Weekly",
          description:
            "A Weekly é um projeto de curadoria de artigos, citações, imagens e links interessantes sobre o mundo do RPG para ajudar jogadores " +
            "e mestres. (em breve)",
          link: "/weekly"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  background-color: #f9f9f9;

  &:before,
  &:after {
    background-color: #f9f9f9;
  }
}

.project {
  padding: 2em 0;
}
</style>
