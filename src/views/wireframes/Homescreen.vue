<template>
  <div class="mb-3">
    <p class="is-size-3 mb-5 has-text-primary">
      <b>Bom dia, Tereza!</b>
    </p>
    <div class="columns is-multiline buttons-group">
      <div class="column is-12">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="map-marker-distance"
          expanded
        >Roteiro</b-button>
      </div>
      <div class="column is-12">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="calendar-edit"
          expanded
        >Preparação</b-button>
      </div>
      <div class="column is-12">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="map-search-outline"
          expanded
        >Curiosidades</b-button>
      </div>
      <div class="column is-12">
        <b-button
          tag="router-link"
          to="/promo-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="help"
          expanded
        >Dúvidas</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homescreen',
};
</script>

<style lang="scss" scoped>
.buttons-group {
  a {
    height: 120px;
  }
}
</style>
