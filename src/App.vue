<template>
  <div id="app">
    <div>
      <div class="box main-container">
        <Header />
        <router-view class="route-link" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/molecules/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import './styles/variables.scss';

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $primary;

  width: 100%;
  min-height: 100vh;

  padding: 8px;
  background-color: #eeeeee;
}
</style>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  margin: auto;
  max-width: 510px;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.route-link {
  width: 100%;
}
</style>
