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
      { text: 'Nossa, a nossa viagem foi incrível!' },
      { text: 'Tava olhando a sua carteira e achei várias milhas sobrando!' },
      { text: 'E agora que você está de volta, vocé sabe o que fazer com as suas milhas?' },
    ],
  }),
};
</script>
