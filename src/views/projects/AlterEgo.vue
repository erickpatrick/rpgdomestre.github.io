<template>
  <div class="alter-ego">
    <article class="section section--primary">
      <p>Depois de um longo tempo de amadurecimento, <em>Alter Ego</em> veio para ser desenvolvido com e para a comunidade RPGista.</p>
      <p>Ajude-nos com as <strong>regras</strong>, ajustando o <em>sistema</em>; com a <strong>ambientação</strong>, evoluindo a <em>Terra 2037</em>; ou decidindo o futuro dos <strong>personagens</strong>, em <em>Dackers</em>.</p>
    </article>
    <article class="section section--secondary section--columns">
      <section>
        <h6>Sistema</h6>
        <p>Alter Ego, do Latim, <em>outro eu</em>, é um sistema genérico e rápido que utiliza dados de 6 lados.</p>
        <router-link to="/alter-ego/sistema">Visitar</router-link>
      </section>
      <section>
        <h6>Terra 2037</h6>
        <p>A grande e nova Era da Informação chegou. O mundo inteiro está, literalmente, conectado.</p>
        <router-link to="/alter-ego/terra-2037">Visitar</router-link>
      </section>
      <section>
        <h6>Dackers</h6>
        <p>No velho ditado "há o dia da caça e do caçador", os Dackers acreditam que você é a caça...</p>
        <router-link to="/alter-ego/dackers">Visitar</router-link>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "AlterEgo",
  mounted() {
    this.$emit("change:header", {
      title: "Alter Ego",
      subtitle: "Regras. Ambientação. Ficção.",
      showNavigation: false,
      showSubheader: true
    });
  }
};
</script>

<style lang="scss" scoped>
.alter-ego {
  margin-top: 4em;
}
</style>
