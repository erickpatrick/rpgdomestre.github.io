<template>
    <div class="alter-ego alter-ego--sistema">
        <article>
            <TableOfContents side="right">
                <h4>Índice</h4>
                <h5>Introdução</h5>
                <p>Por que <em>Alter Ego</em>?</p>
                <p>Por que mais um sistema genérico?</p>
                <p>Diferença para outros sistemas?</p>
                <h5>As Regras</h5>
                <p>Dados</p>
                <p>Atributos</p>
                <p>Resoluções Situacionais</p>
                <p>Combate</p>
                <p>Aptidões e Inépcias</p>
                <p>Dons</p>
                <h5>Listas</h5>
                <p>Situações/Testes</p>
                <p>Armas e proteções</p>
                <p>Aptidões</p>
                <p>Inépcias</p>
                <p>Extras</p>
            </TableOfContents>
            <section class="alter-ego__main-content">
                <article>
                    <h4>Introdução</h4>
                    <section>
                        <h6>Por que <em>Alter Ego</em>?</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Por que mais um sistema genérico?</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Diferença para outros sistemas?</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                </article>
                <article>
                    <h4>As Regras</h4>
                    <section>
                        <h6>Dados</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Atributos</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Resoluções Situacionais</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Combate</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Aptidões e Inépcias</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Dons</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                </article>
                <article>
                    <h4>Listas</h4>
                    <section>
                        <h6>Situações x Testes</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Armas e proteções</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Aptidões</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Inépcias</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                    <section>
                        <h6>Outros</h6>
                        <p>Conteúdo em breve</p>
                    </section>
                </article>
            </section>
        </article>
    </div>
</template>

<script>
import AlterEgo from "../AlterEgo.vue";

export default {
  name: "AlterEgoSistema",
  extends: AlterEgo,
  components: {
    TableOfContents: () => import("@/components/TableOfComponents.vue")
  },
  mounted() {
    this.$emit("change:header", {
      subtitle: "O Sistema"
    });
  }
};
</script>

<style lang="scss" scoped>
.alter-ego {
  padding-top: 4em;
  overflow: hidden;

  &__main-content {
      article {
          margin-bottom: 6em;
      }
  }
}
</style>
