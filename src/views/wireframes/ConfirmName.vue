<template>
  <div>
    <p class="is-size-4 pt-4 mb-6">Vamos confirmar algumas informações?</p>

    <b-field
      label="O seu nome é"
      custom-class="is-large"
    >
      <b-input
        v-model="name"
        type="text"
        maxlength="30"
        size="is-large"
      />
    </b-field>

    <b-field
      label="E o seu email"
      custom-class="is-large"
    >
      <b-input
        v-model="email"
        type="text"
        maxlength="30"
        size="is-large"
      />
    </b-field>

    <b-button
      class="is-primary"
      size="is-large"
      tag="router-link"
      to="/questions"
      expanded
      rounded
      :disabled="!isFilled"
    >Sim</b-button>

  </div>
</template>

<script>
export default {
  name: 'ConfirmName',
  data: () => ({
    name: 'Tereza Gonçalves',
    email: 'tereza@gmail.com',
  }),
  computed: {
    isFilled() {
      return Boolean(this.name && this.email);
    },
  },
};
</script>
