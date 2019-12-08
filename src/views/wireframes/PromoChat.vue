<template>
  <Messenger
    v-bind="{ initialChat }"
  />
</template>

<script>
import Messenger from '../../components/organisms/Messenger.vue';

export default {
  name: 'PromoChat',
  components: {
    Messenger,
  },
  data: () => ({
    initialChat: [
      { text: 'Olá, aqui é a Maitê' },
      { text: 'Por acaso as suas milhas acabam sempre vencendo?' },
      { text: 'Você sabia que pode vender as suas milhas? Sim, algumas empresas fornecem esse serviço.' },
    ],
  }),
};
</script>
