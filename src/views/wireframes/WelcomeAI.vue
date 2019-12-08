<template>
  <div class="has-text-primary">
    <div class="has-text-centered">
      <PersonaPic class="center" />
    </div>

    <p class="is-size-4 mb-4">
      <b>
        Eu sou a Maitê e vou ser a sua companhia
        durante toda a sua viagem
      </b>
    </p>

    <p class="is-size-6 mb-5">
      Para que a nossa viagem seja incrível,
      preciso que você me responda algumas
      perguntas rápidas.
    </p>

    <b-button
      class="is-primary"
      size="is-large"
      tag="router-link"
      to="/confirm-name"
      expanded
      rounded
    >
      Vamos lá!
    </b-button>

    <b-button
      class="is-text mt-4"
      tag="router-link"
      to="/home"
      expanded
      rounded
    >
      Agora não
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
