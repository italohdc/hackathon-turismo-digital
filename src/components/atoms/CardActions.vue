<template>
  <div>
    <b-button
      tag="router-link"
      to="/normal-chat"
      type="is-link"
      size="is-large is-primary"
      icon-left="map-marker-distance"

      expanded
    >Roteiro</b-button>
  </div>
</template>

<script>
export default {
  name: 'CardActions',
  props: {
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
