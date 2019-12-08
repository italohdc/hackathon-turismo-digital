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

      <b-button class="ml-4" size="is-large" rounded>
        Sair
      </b-button>
    </div>

    <div v-else>
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
    height: 60px;
    width: auto;
  }
}

.logo-default {
  margin-left: auto;
  margin-right: auto;
  img {
    height: 28px;
    width: auto;
  }
}
</style>
