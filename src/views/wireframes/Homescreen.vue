<template>
  <div class="mt-6 mb-4">
    <div class="columns is-multiline buttons-group">
      <div class="column is-half">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="map-marker-distance"
          outlined
          expanded
        >Roteiro</b-button>
      </div>
      <div class="column is-half">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="calendar-edit"
          outlined
          expanded
        >Preparação</b-button>
      </div>
      <div class="column is-half">
        <b-button
          tag="router-link"
          to="/normal-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="map-search-outline"
          outlined
          expanded
        >Curiosidades</b-button>
      </div>
      <div class="column is-half">
        <b-button
          tag="router-link"
          to="/promo-chat"
          type="is-link"
          size="is-large is-primary"
          icon-left="help"
          outlined
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
