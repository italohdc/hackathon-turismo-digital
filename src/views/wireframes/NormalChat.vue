<template>
  <Messenger
    v-bind="{ initialChat }"
  />
</template>

<script>
import Messenger from '../../components/organisms/Messenger.vue';

export default {
  name: 'NormalChat',
  components: {
    Messenger,
  },
  data: () => ({
    initialChat: [
      { text: 'Olá, aqui é a Maitê' },
      { text: 'Como eu posso te ajudar?' },
    ],
  }),
};
</script>
