<template>
  <div class="logo-container mb-5">
    <figure
      :class="[
        'image logo is-inline-block',
        { 'logo-home' : isHome },
        { 'logo-default' : !isHome },
      ]"
    >
      <img src="../../assets/maite_logo.png">
    </figure>

    <div v-if="isHome">
      <b-button
        icon-left="settings-outline"
        size="is-large"
        rounded
      />

      <b-button
        class="ml-4 is-hidden-mobile"
        size="is-large"
        rounded
      >
        Sair
      </b-button>
    </div>

    <div v-else-if="isChat">
      <b-button
        icon-left="close"
        tag="router-link"
        to="/home"
        type="is-link"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isHome() {
      return this.$route.path === '/home';
    },
    isChat() {
      const { path } = this.$route;
      return path === '/normal-chat' || path === '/promo-chat';
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  flex-direction: row;
}

.logo-home {
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  img {
    height: 50px;
    width: auto;
  }
}

.logo-default {
  margin-left: 24px;
  margin-right: auto;
  img {
    height: 32px;
    width: auto;
  }
}
</style>
