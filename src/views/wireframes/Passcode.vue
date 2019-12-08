<template>
  <div>
    <p class="is-size-4 mb-6">Digite um código de acesso futuro</p>

    <b-input
      v-model="password"
      size="is-large"
      type="password"
      maxlength="4"
      class="center-password"
    />

    <b-button
      class="mt-5 is-primary"
      size="is-large"
      tag="router-link"
      to="/page-3"
      expanded
      :disabled="!isFilled"
    >Pronto</b-button>
  </div>
</template>

<script>
export default {
  name: 'Passcode',
  data: () => ({
    password: '',
  }),
  computed: {
    isFilled() {
      return this.password.length >= 4;
    },
  },
};
</script>

<style lang="scss" scoped>
.center-password {
  text-align: center;
}
</style>
