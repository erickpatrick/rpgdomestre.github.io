<template>
  <section class="projects">
    <h4>Projetos</h4>
    <div v-for="(project, index) in projects" :key="index">
      <h6>{{ project.name }}</h6>
      <p>{{ project.description }}</p>
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
            '"sobrenomes" diferentes. Para maiores informações, visite a página do projeto (em breve).'
        }
        // ,
        // {
        //   name: "Weekly",
        //   description: "A Weekly é uma newsletter semanal curada pelos mestre do RPG do Mestre, trazendo publicações interessantes sobre o mundo do RPG ",
        //   extra: ""
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
