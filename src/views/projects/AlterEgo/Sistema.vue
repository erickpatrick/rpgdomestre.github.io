<template>
    <div class="alter-ego alter-ego--sistema">
        <article>
            <TableOfContents side="right">
                <h4>Índice</h4>
                <h5><a href="#introducao">Introdução</a></h5>
                <p><a href="#porque-alterego">Por que <em>Alter Ego</em>?</a></p>
                <p><a href="#porque-generico">Por que mais um sistema genérico?</a></p>
                <p><a href="#diferenca-sistemas">Diferença para outros sistemas?</a></p>
                <h5><a href="#regras">As Regras</a></h5>
                <p><a href="#dados">Dados</a></p>
                <p><a href="#atributos">Atributos</a></p>
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
                    <h4 id="introducao">Introdução</h4>
                    <section id="porque-alterego">
                        <h6>Por que <em>Alter Ego</em>?</h6>
                        <p>Alter Ego vem do latim e significa <em>outro eu</em>, isso é, uma segunda versão de você.
                          Acredito que os personagens de RPG são, basicamente, outras versões nossas, que só podemos
                          se-las durante os nossos jogos.</p>
                    </section>
                    <section id="porque-generico">
                        <h6>Por que mais um sistema genérico?</h6>
                        <p>Alguns se perguntam o porquê de criar mais um sistema genérico, sendo que já existem tantos bons por aí, como o Daemon, GURPS, Savage Worlds e Fate. A minha resposta é: Exercício de criatividade e mais alternativas.</p>
                        <p>Trazer um novo sistema à vida é colocar o lado criativo em prática, buscando soluções diferentes para mecânicas existentes e buscar novas mecânicas para certas situações que apresentam-se sem uma solução.</p>
                        <p>Tais soluções e mecânicas não são melhores nem piores, juntas, porém, criam arcabouços para novas experiências que os sistemas existentes podem não proporcionar.</p>
                        <p>Com mais alternativas entre as possíveis escolhas de sistemas, ativamos a concorrência saudável, fazendo com que todos os sistemas, direta ou indiretamente, evoluam de forma a apresentar seu melhor lado para o jogador e atraí-lo para sua base de fãs.</p>
                    </section>
                    <section id="diferenca-sistemas">
                        <h6>Diferença para outros sistemas?</h6>
                        <p>O sistema Alter Ego é um sistema relativamente simples, com poucas regras em seu cerne, pensado para funcionar em qualquer cenário ou ambientação, e com possibilidade de adição de módulos para aumentar a funcionalidade geral do sistema.</p>
                    </section>
                </article>
                <article>
                    <h4 id="regras">As Regras</h4>
                    <section id="dados">
                        <h6>Dados</h6>
                        <p>O Sistema <em><strong>Alter Ego</strong></em> utiliza dados de 6 faces para a resolução das situações
                          decorrentes das aventuras dos personagens. Tais dados são facilmente encontrados e costumam
                          acompanhar vários dos jogos de tabuleiro existentes no mercado, como War e Banco
                          Imobiliário, por exemplo. Por questão de brevidade, serão chamados de <em><strong>d6</strong></em> ou,
                          simplesmente, <em><strong>d</strong></em>.</p>
                    </section>
                    <section id="atributos">
                        <h6>Atributos</h6>
                        <p>Os Atributos no Sistema <em><strong>Alter Ego</strong></em> tem por objetivo refletir as várias capacidades físicas e mentais que um personagem possui. Os personagens tiveram seus atributos divididos em 2 categorias: Físicos e Mentais. Somado a isso, temos o atributo especial, Saúde, que indica a saúde física e mental do personagem.</p>
                      <p>Os atributos Físicos e Mentais começam em zero, mas podem variar de <strong>-5 a 10</strong>. Cada valor de
                        atributo fará parte da quantidade d6 (<em>pilha de dados</em>) que o jogador lançará nas
                        resoluções situacionais (<em>rolagens de dados</em>).</p>
                      <p>O jogador, no ato da criação do personagem, terá a seu dispor 10 pontos para gastar entre os atributos Físicos e Mentais. Pode-se retirar pontos de um atributo para fazer com que outros tenham valores mais altos. A soma dos atributos negativos não pode ser menor que -5. O valor da Saúde é calculado de modo especial: Ele é a soma dos atributos Físicos. </p>
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

  a {
    font-size: 1em;
    line-height: 1.5em;
  }
}
</style>
