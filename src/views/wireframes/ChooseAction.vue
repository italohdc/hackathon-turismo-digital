<template>
  <div>
    <div class="has-text-centered mb-3">
      <PersonaPic class="center" />
    </div>

    <p class="is-size-4 mb-5">
      Agora que eu te conheço, o que você quer fazer?
    </p>

    <b-button
      class="is-primary mt-4 mb-5"
      size="is-large"
      tag="router-link"
      to="/page-6"
      expanded
    >Roteiro</b-button>
    <b-button
      class="is-primary"
      size="is-large"
      tag="router-link"
      to="/page-6"
      expanded
    >Preparar Viagem</b-button>
  </div>
</template>

<script>
import PersonaPic from '../../components/atoms/PersonaPic.vue';

export default {
  name: 'ChooseAction',
  components: {
    PersonaPic,
  },
};
</script>
