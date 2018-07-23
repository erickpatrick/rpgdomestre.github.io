<template>
  <section class="projects">
    <h4>Projetos</h4>
    <div v-for="(project, index) in projects" :key="index">
      <h6>{{ project.name }}</h6>
      <p>{{ project.description }}</p>
      <footer>
        <ul>
          <li v-if="project.extras" v-for="(type, typesIndex) in project.extra.types" :key="typesIndex">
              {{ type }}
          </li>
        </ul>
      </footer>
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
          description: "É o projeto mais recente do RPG do Mestre. Ele é dividido em três partes: Sistema, Cenário e Ficção. Sim, todos tem o mesmo nome, porém, \"sobrenomes\" diferentes. Para maiores informações, visite a página do projeto.",
          extra: {
            types: [
              "Sistema",
              "Cenário",
              "Ficção"
            ]
          }
        }
        // ,
        // {
        //   name: "Weekly",
        //   description: "A Weekly é uma newsletter semanal curada pelos mestre do RPG do Mestre, trazendo publicações interessantes sobre o mundo do RPG ",
        //   extra: ""
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>