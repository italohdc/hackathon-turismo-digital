<template>
  <div class="messenger-app">
    <div class="messenger-chat">
      <transition-group name="fade">
        <ChatBox
          v-for="(message, index) in messages"
          :key="`msg-${index}`"
          :isFromUser="message.isFromUser"
        >
          {{ message.text }}
        </ChatBox>
      </transition-group>

      <ChatBox v-if="isTyping">
        <hollow-dots-spinner
          class="m-3"
          :animation-duration="1200"
          :dot-size="12"
          :dots-num="3"
          color="#2c3e50"
        />
      </ChatBox>
    </div>

    <div>
      <b-field>
        <b-input
          v-model="newMessage"
          size="is-large"
          placeholder="Digite sua mensagem..."
          class="input-bar"
          @keydown.native.enter="sendNewMessage()"
        />
        <p class="control">
          <b-button
            class="button is-primary"
            size="is-large"
            @click="sendNewMessage()"
            :disabled="!newMessage"
          >
            <b-icon
              icon="send"
            />
          </b-button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners';
import ChatBox from '../../components/molecules/ChatBox.vue';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  name: 'Messages',
  components: {
    ChatBox,
    HollowDotsSpinner,
  },
  data: () => ({
    messages: [],
    newMessage: '',
    isTyping: false,
  }),
  methods: {
    sendNewMessage() {
      this.messages.push({
        isFromUser: true,
        text: this.newMessage,
      });

      this.newMessage = '';
    },
  },
  async created() {
    this.isTyping = true;

    await timeout(2000);
    this.messages.push({
      isFromUser: false,
      text: 'Olá, aqui é a Margareth',
    });

    this.isTyping = false;
    await timeout(800);
    this.isTyping = true;

    await timeout(2000);
    this.messages.push({
      isFromUser: false,
      text: 'Como eu posso te ajudar?',
    });

    this.isTyping = false;
  },
};
</script>

<style lang="scss" scoped>
.messenger-app {
  width: 100%;
  min-height: 80vh;
}

.messenger-chat {
  min-height: 75vh;
}

.input-bar {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
