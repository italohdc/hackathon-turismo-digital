<template>
  <div>
    <div class="has-text-centered">
      <PersonaPic class="center" />
    </div>

    <p class="is-size-3">
      Olá,
    </p>
    <p class="is-size-4 mb-5">
      Sou a <b>Margareth</b> e vou te ajudar.
    </p>

    <p class="is-size-4 mb-5">
      Me conta algumas coisas sobre você?
    </p>

    <b-button
      class="is-primary"
      size="is-large"
      tag="router-link"
      to="/page-4"
      expanded
    >
      Conto sim
    </b-button>
  </div>
</template>

<script>
import PersonaPic from '../../components/atoms/PersonaPic.vue';

export default {
  name: 'WelcomeAI',
  components: {
    PersonaPic,
  },
};
</script>

<style lang="scss" scoped>
.persona-pic {
  height: 256px;
  width: 256px;
}
</style>
