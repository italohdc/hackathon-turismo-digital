import Vue from 'vue';
import Vuex from 'vuex';

import PhraseGenerator from '../services/BotService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    isTyping: false,
  },
  mutations: {
    APPEND_MESSAGE(state, { text, isFromUser }) {
      state.messages.push({
        text,
        isFromUser,
      });
    },
    CHANGE_BOT_TYPING_STATUS(state, status) {
      state.isTyping = status;
    },
  },
  actions: {
    sendNewMessage({ commit }, message) {
      commit('APPEND_MESSAGE', message);
    },
    async generateNewAnswer({ commit }, userMessage) {
      await new Promise(resolve => setTimeout(resolve, 600));
      commit('CHANGE_BOT_TYPING_STATUS', true);

      const answer = PhraseGenerator(userMessage.text);

      // Just to give user the impression that it is loading
      await new Promise(resolve => setTimeout(resolve, 1000));

      commit('APPEND_MESSAGE', {
        text: answer,
        isFromUser: false,
      });
      commit('CHANGE_BOT_TYPING_STATUS', false);
    },
    async firstPopulateChat({ commit, dispatch }, initialChat) {
      for (let index = 0; index < initialChat.length; index++) {
        const message = initialChat[index];
        commit('CHANGE_BOT_TYPING_STATUS', true);

        // eslint-disable-next-line no-await-in-loop
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch('sendNewMessage', {
          isFromUser: message.isFromUser,
          text: message.text,
        });

        commit('CHANGE_BOT_TYPING_STATUS', false);
      }
    },
  },
  modules: {
  },
});
